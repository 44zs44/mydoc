### 安装步骤

首先将以下内容添加到你的 `~/.gitconfig` 中:

```shell
[url "ssh://git@github.com/"]
    insteadOf = https://github.com/
```

然后执行以下命令以安装 `trpc-cmdline`:

```shell
go install trpc.group/trpc-go/trpc-cmdline/trpc@latest
```

如果在大陆报错 EOF，需配置代理，具体步骤请查看: [https://goproxy.cn/](https://goproxy.cn/)

### 安装依赖

只需要运行 `trpc setup` 便可安装所有依赖。假如有些依赖安装不成功，可以参考报错信息下载。

### 常用指令

下面列举了一些常用的命令行选项：

* `-f`: 用于强制覆盖输出目录中的内容
* `-p`:用于指定proto文件生成桩代码
* `-o XXX`:用于指定生成代码目录
* `--rpconly`:可以只生成桩代码（`pb.go` 以及 `trpc.go`）
  ```
  $ trpc create -p helloworld.proto -o out --rpconly
  $ tree out
  out
  |-- go.mod
  |-- go.sum
  |-- helloworld.pb.go
  |-- helloworld.trpc.go
  `-- helloworld_mock.go
  ```
* `--mock=false`: 禁止生成 mock 代码
* `--validate=true`: 开启数据校验，详细用法见 [validate使用.md](https://github.com/trpc-group/trpc-cmdline/blob/main/docs/examples/example-2/README.zh_CN.md)
* `--nogomod=true`: 在生成桩代码时不生成 `go.mod` 文件，只在 `--rpconly=true` 的时候生效, 默认为 `false`
* `-d some-dir`: 添加 proto 文件的查找路径（包括依赖的 proto 文件），可以指定多次

### 常用导入import

* annotations:import "trpc/api/annotations.proto";
* `trpc.alias`: `import "trpc/proto/trpc_options.proto";`
* `trpc.go_tag`: `import "trpc/proto/trpc_options.proto";`
* `validate.rules`: `import "validate/validate.proto";`
* `trpc.swagger`: `import "trpc/swagger/swagger.proto";`
