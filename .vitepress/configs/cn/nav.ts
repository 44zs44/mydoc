import type { DefaultTheme } from 'vitepress'
// 导航栏设置

export const nav: DefaultTheme.Config['nav'] = [
  { text: '导航', link: 'nav' },
  { text: '文档记录', items: Nav_Docs(), activeMatch: '/skill/' },
  { text: '前端物语', items: Nav_Fe(), activeMatch: '/fe/' },
  { text: 'VPS使用指南', items: Nav_Vps(), activeMatch: '/VPS/' },
]

// 文档记录
export function Nav_Docs() {
  return [
    {
      items: [
        { text: '日常记录', link: '/skill/JL-11' },
        { text: '入门指南', link: '/skill/RM-01' },
        { text: '梅林操作文档', link: '/skill/ML-01' }
      ]
    }
  ]
}

// 前端物语
export function Nav_Fe() {
  return [
    {
      items: [
        { text: 'JavaScript 基础知识', link: '/fe/javascript/types' },
        { text: 'HTML / CSS', link: '/fe/html/' },
        { text: 'ES6 常用知识点', link: '/fe/es6/' },
        { text: 'TypeScript', link: '/fe/typescript/base' }
      ]
    },
    {
      items: [
        { text: '工程化项目原理', link: '/fe/gc/GC-01' },
        { text: '浏览器知识', link: '/fe/browser/' },
        { text: '概念知识点', link: '/fe/concept/module' },
        { text: '编程题', link: '/fe/coding/' }
      ]
    }
  ]
}

// VPS使用指南
export function Nav_Vps() {
  return [
    {
      items: [
        { text: '基础设置', link: '/VPS/01' },
        { text: '进阶使用', link: '/VPS/02' },
        { text: '搭建服务', link: '/VPS/06' }
      ]
    }
  ]
}
