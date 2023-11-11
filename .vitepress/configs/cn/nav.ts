import type {DefaultTheme} from 'vitepress'
// 导航栏设置

export const nav: DefaultTheme.Config['nav'] = [
    {text: '导航', link: 'nav'},
    {text: '工具配置', items: Nav_Docs(), activeMatch: '/skill/'},
    {text: '前端物语', items: Nav_Fe(), activeMatch: '/fe/'},
    {text: '前端', items: Nav_Web(), activeMatch: '/web/'},
]

// 文档记录
export function Nav_Docs() {
    return [
        {
            items: [
                {text: '安装配置', link: '/skill/JL-01'},
                {text: '工具指南', link: '/skill/RM-01'},
            ]
        }
    ]
}

// 前端物语
export function Nav_Fe() {
    return [
        {
            items: [
                {text: 'JavaScript 基础知识', link: '/fe/javascript/types'},
                {text: 'HTML / CSS', link: '/fe/html/'},
                {text: 'ES6 常用知识点', link: '/fe/es6/'},
                {text: 'TypeScript', link: '/fe/typescript/base'}
            ]
        },
        {
            items: [
                {text: '工程化项目原理', link: '/fe/gc/GC-01'},
                {text: '浏览器知识', link: '/fe/browser/'},
                {text: '概念知识点', link: '/fe/concept/module'},
                {text: '编程题', link: '/fe/coding/'}
            ]
        }
    ]
}

export function Nav_Web() {
    return [
        {
            items: [
                {text: 'HTML', link: '/web/HTML/01'},
                {text: 'CSS', link: '/web/CSS/01'},
                {text: 'JavaScript', link: '/web/JavaScript/01'},
                {text: 'TypeScript', link: '/web/TypeScript/01'},
            ]
        },
        {
            items: [
                {text: 'Vue', link: '/web/Vue/01'},
                {text: 'React', link: '/web/React/01'},
                {text: '前端工程化', link: '/web/engineering/01'},
                {text: 'Vite', link: '/web/Vite/01'},
            ]
        },
    ]
}
