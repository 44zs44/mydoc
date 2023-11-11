import type {DefaultTheme} from 'vitepress'
// 导航栏设置

export const nav: DefaultTheme.Config['nav'] = [
    {text: '导航', link: 'nav'},
    {text: '工具配置', items: Nav_Docs(), activeMatch: '/skill/'},
    {text: '前端', items: Nav_Web(), activeMatch: '/web/'},
    {text: '后端', items: Nav_Service(), activeMatch: '/service/'},
]

// 文档记录
export function Nav_Docs() {
    return [
        {
            items: [
                {text: '安装配置', link: '/skill/JL-11'},
                {text: '工具指南', link: '/skill/RM-02'},
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

export function Nav_Service() {
    return [
        {
            items: [
                {text: 'NestJS', link: '/service/NestJS/01'},
                {text: 'MySQL', link: '/service/MySQL/01'},
                {text: 'MongoDB', link: '/service/MongoDB/01'},
                {text: 'Node', link: '/service/Node/01'},
                {text: 'Docker', link: '/service/Docker/01'},
                {text: 'Nginx', link: '/service/Nginx/01'},
            ]
        }
    ]
}
