import type { DefaultTheme } from 'vitepress'

// 侧边栏配置
export const sidebar: DefaultTheme.Config['sidebar'] = {
  // 工具配置
  '/skill/': { base: '/skill/', items: Sidebar_Skill() },
  // 前端
  '/web/': { base: '/web/', items: Sidebar_Web() },
  // 后端
  '/service/': { base: '/service/', items: Sidebar_Service() }
}

// 文档记录
export function Sidebar_Skill() {
  return [
    {
      // 分组名称
      text: '安装配置',
      // 下拉开关
      collapsed: false,
      // 分组路径
      base: '/skill/',
      // 分组页面
      items: [
        { text: '使用 nvm 管理不同版本的 node', link: 'JL-11' },
        { text: '使用 GPG 签名 Git Commit', link: 'JL-10' },
        { text: 'VitePress 打造个人前端导航网站', link: 'JL-09' },
        { text: 'oh-my-zsh 安装 & 配置', link: 'JL-08' },
        { text: 'VitePress实现单击图片放大', link: 'JL-07' },
        { text: 'NPM 使用国内镜像及恢复默认源', link: 'JL-06' },
        { text: '为项目添加 Prettier 格式化代码', link: 'JL-05' },
        { text: 'VS Code 使用技巧', link: 'JL-04' },
        { text: 'VitePress 添加 Giscu评论', link: 'JL-03' },
        { text: 'PicGo + Github 搭建图床', link: 'JL-01' }
      ]
    },
    {
      // 分组名称
      text: '工具指南',
      // 下拉开关
      collapsed: false,
      // 分组路径
      base: '/skill/',
      // 分组页面
      items: [
        { text: 'Homebrew', link: 'RM-01' },
        { text: 'Git', link: 'RM-02' },
        { text: 'Docker', link: 'RM-03' },
        { text: 'Linux', link: 'RM-04' },
        { text: 'Markdown', link: 'RM-05' },
        { text: 'PNPM', link: 'RM-06' },
        { text: 'trpc-cmdline', link: 'trpc-cmdline' }
      ]
    }
  ]
}

export function Sidebar_Web() {
  return [
    {
      text: 'HTML',
      collapsed: true,
      base: '/web/HTML/',
      items: [{ text: 'HTML 理论知识点', link: '01' }]
    },
    {
      text: 'CSS',
      collapsed: true,
      base: '/web/CSS/',
      items: [
        { text: 'Grid布局学习笔记', link: '01' },
        { text: '常用代码段', link: '02' },
        { text: '揭秘读书摘要', link: '03' }
      ]
    },
    {
      text: 'JavaScript',
      collapsed: true,
      base: '/web/JavaScript/',
      items: [
        { text: '闭包', link: '01' },
        { text: '渲染树回流与重绘', link: '02' },
        { text: 'Promise', link: '03' },
        { text: '手写Promise+方法', link: '04' },
        { text: 'Promise后续', link: '06' },
        { text: 'Event Loop', link: '07' },
        { text: 'ES-14 种对象操作方法', link: '08' },
        { text: 'this指向', link: '09' },
        { text: '预编译', link: '10' },
        { text: 'async与await', link: '11' },
        { text: '文件系统', link: '12' },
        { text: '高阶函数', link: '13' },
        { text: '原型和原型链', link: '14' },
        { text: 'WeakMap和Map', link: '15' }
      ]
    },
    {
      text: 'TypeScript',
      collapsed: true,
      base: '/web/TypeScript/',
      items: [
        { text: '基础知识', link: '01' },
        { text: '进阶知识', link: '02' },
        { text: '类型体操练习', link: '03' }
      ]
    },
    {
      text: 'Vue',
      collapsed: true,
      base: '/web/Vue/',
      items: [
        { text: '响应式系统实现', link: '01' },
        { text: '响应式系统相关数据结构', link: '11' },
        { text: '数据劫持', link: '02' },
        { text: 'Vue中的data为什么是函数', link: '03' },
        { text: '踩坑经验', link: '04' },
        { text: '搭建一套规范的Vue3.x', link: '05' },
        { text: '代码规范', link: '06' },
        { text: '提交规范', link: '07' },
        { text: '单元测试', link: '08' },
        { text: '自动部署', link: '09' },
        {
          text: 'Vue小tips',
          items: [{ text: 'vue组件@hook:xxx事件', link: '10-1' }]
        }
      ]
    },
    {
      text: 'React',
      collapsed: true,
      base: '/web/React/',
      items: [
        { text: 'React常用Hook', link: '01' },
        { text: '函数组件玩转state, props, context', link: '02' },
        {
          text: 'React基础小知识',
          items: [
            { text: 'string类型的refs效率不高', link: '03-1' },
            { text: '函数组件相比于类组件劣势', link: '03-2' },
            { text: '类组件和函数组件特点', link: '03-3' }
          ]
        },
        { text: 'React组件生命周期', link: '04' },
        { text: 'TSX常见用法', link: '05' },
        { text: 'TSX题目', link: '06' },
        { text: 'Hook和Fiber', link: '07' }
      ]
    },
    {
      text: '前端工程化',
      collapsed: true,
      base: '/web/engineering/',
      items: [
        { text: '掌握 package', link: '01' },
        { text: '掌握 tsconfig', link: '02' },
        { text: 'JS 模块化原理', link: '03' },
        { text: '模块化', link: '04' },
        { text: '前端渲染', link: '05' }
      ]
    },
    {
      text: 'Vite',
      collapsed: true,
      base: '/web/Vite/',
      items: [
        {
          text: 'Vite学习',
          items: [
            { text: '简介', link: '01-1' },
            { text: '核心原理', link: '01-2' },
            { text: '构建流程', link: '01-3' },
            { text: '与传统构建工具的比较', link: '01-4' },
            { text: '配置与使用', link: '01-5' },
            { text: '问题与解决方案', link: '01-6' },
            { text: 'Vite5', link: 'Vite5' }
          ]
        },
        {
          text: 'Vite运用记录',
          items: [{ text: '自动导入+动态组件', link: '02-1' }]
        }
      ]
    },
    {
      text: '其他',
      collapsed: true,
      base: '/web/Other/',
      items: [
        {
          text: '模块化相关',
          items: [{ text: '组件引入解析流程', link: '01' }]
        },
        { text: '文档注释', link: '02' }
      ]
    }
  ]
}

export function Sidebar_Service() {
  return [
    { base: '/service/Node/', text: 'Node', link: '01' },
    { base: '/service/MongoDB/', text: 'MongoDB', link: '01' },
    { base: '/service/NestJS/', text: 'NestJS', link: '01' },
    { base: '/service/MySQL/', text: 'MySQL', link: '01' },
    { base: '/service/Docker/', text: 'Docker', link: '01' },
    { base: '/service/Nginx/', text: 'Nginx', link: '01' }
  ]
}
