# ref和reactive的解构响应式问题

题目：对reactive响应式对象进行解构时，会不会丢失响应式

## reactive实现原理

```tsx
export function reactive(target: object) {
  // if trying to observe a readonly proxy, return the readonly version.
  if (isReadonly(target)) {
    return target
  }
  return createReactiveObject(
    target,
    false,
    mutableHandlers,
    mutableCollectionHandlers,
    reactiveMap
  )
}

function createReactiveObject(
  target: Target, // 目标对象
  isReadonly: boolean, // 是否为只读
  baseHandlers: ProxyHandler<any>, // 基础的代理处理器，用于普通对象
  collectionHandlers: ProxyHandler<any>, // 集合的代理处理器，用于Map、Set等
  proxyMap: WeakMap<Target, any> // 存储原对象与代理对象的映射
) {
  // 检查target是否是对象，如果不是则直接返回
  // 只有对象才能转换为响应式对象
  if (!isObject(target)) {
    if (__DEV__) {
      console.warn(`value cannot be made reactive: ${String(target)}`)
    }
    return target
  }

  // 如果target已经是一个代理对象，则直接返回它
  // 特殊情况：如果是在已经是响应式的对象上调用readonly，除外
  if (
    target[ReactiveFlags.RAW] && // 检查是否已经是响应式对象
    !(isReadonly && target[ReactiveFlags.IS_REACTIVE]) // 非只读或已经是响应式的情况
  ) {
    return target
  }

  // 如果已经为target创建过代理，则从proxyMap中取出并返回
  const existingProxy = proxyMap.get(target)
  if (existingProxy) {
    return existingProxy
  }

  // 获取target的类型，只有特定的类型才可以被观察
  // INVALID类型表示不可被代理
  const targetType = getTargetType(target)
  if (targetType === TargetType.INVALID) {
    return target
  }

  // 根据target的类型选择合适的代理处理器
  // 并创建代理对象
  const proxy = new Proxy(
    target,
    targetType === TargetType.COLLECTION ? collectionHandlers : baseHandlers
  )

  // 将创建的代理对象存储在proxyMap中
  // 以target为键，proxy为值
  proxyMap.set(target, proxy)

  // 返回创建的代理对象
  return proxy
}
```

baseHandlers代码：

```tsx
class BaseReactiveHandler implements ProxyHandler<Target> {
  constructor(
    protected readonly _isReadonly = false, // 是否只读
    protected readonly _shallow = false, // 是否浅响应式
  ) {}

  get(target: Target, key: string | symbol, receiver: object) {
    // 特殊响应式标志处理
    const isReadonly = this._isReadonly,
      shallow = this._shallow
    if (key === ReactiveFlags.IS_REACTIVE) {
      return !isReadonly
    } else if (key === ReactiveFlags.IS_READONLY) {
      return isReadonly
    } else if (key === ReactiveFlags.IS_SHALLOW) {
      return shallow
    } else if (key === ReactiveFlags.RAW) {
      // 返回原始对象的逻辑判断
      return target
    }

    const targetIsArray = isArray(target) // 判断目标是否为数组

    // 数组特殊处理逻辑
    if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver)
    }
    if (key === 'hasOwnProperty') {
      return hasOwnProperty
    }

    **const res = Reflect.get(target, key, receiver) // 常规属性获取**

    // 跳过对特殊键和非跟踪键的处理
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res
    }

    // 依赖收集
    if (!isReadonly) {
      track(target, TrackOpTypes.GET, key)
    }

    // 浅响应式直接返回结果
    if (shallow) {
      return res
    }

    // Ref解包逻辑
    if (isRef(res)) {
      return targetIsArray && isIntegerKey(key) ? res : res.value
    }

    // 深响应式转换逻辑
    **if (isObject(res)) {
      return isReadonly ? readonly(res) : reactive(res)
    }**

    return res // 返回最终结果
  }
}
```

## reactive解构问题分析

通过源码可以看出，reactive的响应式对象实际上为一个createReactiveObject方法创建的Proxy，而访问此Proxy中的字段时，会调用**Reflect.get(target, key, receiver)**进行调取key对应的value值，当value值为Object类型，会继续调用reactive包裹当前value，也就是继续Proxy代理当前value，而响应式对象的依赖收集与触发就是借助了Proxy的get和set进行。

那么当进行解构时，实际的操作就是进行了get访问，当解构字段为普通变量非对象字段，会直接return res，也就是没有进行Proxy代理，此时当然不会触发响应式，而当解构字段为对象字段，会进行Proxy的深度代理，此时解构出的字段就是Proxy，或者说就是reactive(value)，便可以进行响应式操作。
由此，我们可以得出结论：
**`当对reactive解构时，如果解构字段的原始值为对象时，此时不会丢失响应式，反之会丢失`**

## ref解构延伸

上面我们已经分析了reactive解构行为，那么当对ref解构时的行为会是什么样的呢

```tsx
export function ref(value?: unknown) {
  return createRef(value, false)
}

function createRef(rawValue: unknown, shallow: boolean) {
  if (isRef(rawValue)) {
    return rawValue
  }
  return new RefImpl(rawValue, shallow)
}

// RefImpl 类定义，T 代表引用的值的类型
class RefImpl<T> {
  // 存储响应式转换后的值
  private _value: T
  // 存储原始值
  private _rawValue: T

  // 可选的依赖管理对象，用于跟踪和触发更新
  public dep?: Dep = undefined
  // 标记此对象为 ref 类型
  public readonly __v_isRef = true

  constructor(
    value: T, // 初始值
    public readonly __v_isShallow: boolean, // 是否进行浅响应式转换
  ) {
    // 根据是否浅响应，使用 toRaw 函数获取值的原始版本
    this._rawValue = __v_isShallow ? value : toRaw(value)
    // 根据是否浅响应，使用 toReactive 函数获取值的响应式版本
    this._value = __v_isShallow ? value : toReactive(value)
  }

  // 当访问 value 时，追踪依赖并返回响应式值
  **get value() {
    // 追踪对这个 ref 的依赖（追踪当前ref对象的值的依赖关系，以便在值发生变化时触发相关的更新操作）
    trackRefValue(this)
    // 返回响应式值
    return this._value
  }**

  // 当设置 value 时，根据新值更新内部状态并触发更新
  set value(newVal) {
    // 决定是否直接使用 newVal 或将其转换为原始/响应式值
    const useDirectValue =
      this.__v_isShallow || isShallow(newVal) || isReadonly(newVal)
    // 如果不直接使用，则根据需要转换 newVal
    newVal = useDirectValue ? newVal : toRaw(newVal)
    // 如果新旧值不同，则更新内部状态并触发响应系统更新
    if (hasChanged(newVal, this._rawValue)) {
      // 更新原始值
      this._rawValue = newVal
      // 更新响应式值
      this._value = useDirectValue ? newVal : toReactive(newVal)
      // 触发更新
      triggerRefValue(this, DirtyLevels.Dirty, newVal)
    }
  }
}

export const toReactive = <T extends unknown>(value: T): T =>
  isObject(value) ? reactive(value) : value
```

可以看出ref的实现是依靠`createRef`创建一个`RefImpl`对象，get操作会返回实例中的\_value字段，此字段初始化赋值为`toReactive(value)`，当为Object字段时，会调用reactive(value)进行赋值。看到这里，答案已经呼之欲出了，既然ref的实现依靠了Reactive，那么，当对ref.value进行解构的行为也就和Reactive一致

由此，我们可以得出结论：
**`当对ref.value解构时，如果解构字段的原始值为对象时，此时不会丢失响应式，反之会丢失`**

**`当对ref解构时，一定会丢失响应式`**

## 补充

**`const { a: { b: { c } } } = reactive({a:{b:{c:{d:1}}}});`**

这种深层次进行解构，响应式会丢失吗？
答案：不会
当解构时，你可以理解问是在访问.xxx,而Proxy会拦截这个getter操作触发响应式，那么得到的c还是个Proxy，响应式正常触发
