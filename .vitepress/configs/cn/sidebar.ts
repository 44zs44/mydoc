import type {DefaultTheme} from 'vitepress'

// 侧边栏配置
export const sidebar: DefaultTheme.Config['sidebar'] = {
    // 前端物语
    '/fe/': {base: '/fe/', items: Sidebar_Fe()},
    // 文档记录
    '/skill/': {base: '/skill/', items: Sidebar_Skill()},
    // 文档记录
    '/web/': {base: '/web/', items: Sidebar_Web()},
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
                {text: '使用 nvm 管理不同版本的 node', link: 'JL-11'},
                {text: '使用 GPG 签名 Git Commit', link: 'JL-10'},
                {text: 'VitePress 打造个人前端导航网站', link: 'JL-09'},
                {text: 'oh-my-zsh 安装 & 配置', link: 'JL-08'},
                {text: 'VitePress实现单击图片放大', link: 'JL-07'},
                {text: 'NPM 使用国内镜像及恢复默认源', link: 'JL-06'},
                {text: '为项目添加 Prettier 格式化代码', link: 'JL-05'},
                {text: 'VS Code 使用技巧', link: 'JL-04'},
                {text: 'VitePress 添加 Giscu评论', link: 'JL-03'},
                {text: 'PicGo + Github 搭建图床', link: 'JL-01'}
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
                {text: 'Homebrew', link: 'RM-01'},
                {text: 'Git', link: 'RM-02'},
                {text: 'Docker', link: 'RM-03'},
                {text: 'Linux', link: 'RM-04'},
                {text: 'Markdown', link: 'RM-05'},
                {text: 'PNPM', link: 'RM-06'}
            ]
        },
    ]
}

export function Sidebar_Web() {
    return [
        {
            text: 'HTML',
            collapsed: false,
            base: '/web/HTML/',
            items: [
                {text: 'HTML 理论知识点', link: '01'},
            ]
        },
        {
            text: 'CSS',
            collapsed: false,
            base: '/web/CSS/',
            items: [
                {text: 'Grid布局学习笔记', link: '01'},
                {text: "常用代码段", link: "02"},
                {text: "揭秘读书摘要", link: "03"}
            ]
        },
        {
            text: 'JavaScript',
            collapsed: false,
            base: '/web/JavaScript/',
            items: [
                {text: '闭包', link: '01'},
                {text: 'DOM渲染树，解析与加载，回流与重绘', link: '02'},
                {text: 'Promise', link: '03'},
                {text: '手写Promise+方法', link: '04'},
            ]
        },
        {
            text: 'TypeScript',
            collapsed: false,
            base: '/web/TypeScript/',
            items: []
        },
        {
            text: 'Vue',
            collapsed: false,
            base: '/web/Vue/',
            items: []
        },
        {
            text: 'React',
            collapsed: false,
            base: '/web/React/',
            items: []
        },
        {
            text: '前端工程化',
            collapsed: false,
            base: '/web/engineering/',
            items: []
        },
        {
            text: 'Vite',
            collapsed: false,
            base: '/web/Vite/',
            items: []
        },
    ]
}

// 前端物语
export function Sidebar_Fe() {
    return [
        {
            // 分组名称
            text: 'JavaScript 基础知识',
            // 下拉开关
            collapsed: false,
            // 分组路径
            base: '/fe/javascript/',
            // 分组页面
            items: [
                {text: '数据类型', link: 'types'},
                {text: '引用类型的拷贝', link: 'clone'},
                {text: '类型转换', link: 'conversions'},
                {text: '原型和原型链', link: 'prototype'},
                {text: '继承', link: 'inherit'}
            ]
        },
        {
            // 分组名称
            // text: "ES6 常用知识点",
            // 下拉开关
            // collapsed: false,
            // 分组路径
            base: '/fe/es6',
            // 分组页面
            items: [
                {text: 'ES6 常用知识点', link: '/'}
            ]
        },
        {
            // 分组名称
            text: 'TypeScript',
            // 下拉开关
            collapsed: false,
            // 分组路径
            base: '/fe/typescript/',
            // 分组页面
            items: [{text: '基础知识', link: 'base'}]
        },
        {
            // 分组名称
            text: 'HTML / CSS',
            // 下拉开关
            collapsed: false,
            // 分组路径
            base: '/fe/',
            // 分组页面
            items: [
                {text: 'HTML 理论知识点', link: 'html/'},
                {text: 'CSS 理论知识点', link: 'css/'}
            ]
        },
        {
            // 分组名称
            text: '工程化项目原理',
            // 下拉开关
            collapsed: false,
            // 分组路径
            base: '/fe/gc/',
            // 分组页面
            items: [
                {text: '掌握 package ', link: 'GC-01'},
                {text: '掌握 tsconfig ', link: 'GC-02'},
                {text: 'JS 模块化原理 ', link: 'GC-03'}
            ]
        },
        {
            // 分组名称
            text: '浏览器知识',
            // 下拉开关
            collapsed: false,
            // 分组路径
            base: '/fe/',
            // 分组页面
            items: [
                {text: '浏览器相关知识点', link: 'browser/'},
                {text: 'TCP', link: 'network/tcp'},
                {text: 'HTTP', link: 'network/http'}
            ]
        },
        {
            // 分组名称
            text: '概念知识点',
            // 下拉开关
            collapsed: false,
            // 分组路径
            base: '/fe/concept/',
            // 分组页面
            items: [
                {text: '模块化', link: 'module'},
                {text: '前端页面渲染方式', link: 'page-rendering'}
            ]
        },
        {
            // 分组名称
            // text: "编程题",
            // 下拉开关
            collapsed: false,
            // 分组路径
            base: '/fe/',
            // 分组页面
            items: [
                {text: '编程题', link: 'coding/'}
            ]
        }
    ]
}
