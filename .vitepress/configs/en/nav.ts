import type { DefaultTheme } from 'vitepress'
// 导航栏设置

export const nav: DefaultTheme.Config['nav'] = [
  { text: 'Front-end Nav', link: '/en/nav' },
  { text: 'Documentation', items: Nav_Docs_en(), activeMatch: '/en/skill/' },
  { text: 'Front-end story', items: Nav_Fe_en(), activeMatch: '/en/fe/' },
  { text: 'VPS User Guide', items: Nav_Vps_en(), activeMatch: '/en/VPS/' },
]

// 文档记录
export function Nav_Docs_en() {
  return [
    {
      items: [
        { text: 'daily records', link: '/en/skill/JL-01' },
        { text: 'Getting Started Guide', link: '/en/skill/RM-01' },
        { text: 'Merlin operation documentation', link: '/en/skill/ML-01' }
      ]
    }
  ]
}

// 前端物语
export function Nav_Fe_en() {
  return [
    {
      items: [
        {
          text: 'JavaScript basic knowledge',
          link: '/en/fe/javascript/types'
        },
        { text: 'HTML / CSS', link: '/en/fe/html/' },
        { text: 'ES6 Common knowledge points', link: '/en/fe/es6/' },
        { text: 'TypeScript', link: '/en/fe/typescript/base' }
      ]
    },
    {
      items: [
        { text: 'Engineering project principles', link: '/en/fe/gc/GC-01' },
        { text: 'Browser knowledge', link: '/en/fe/browser/' },
        { text: 'Concept knowledge points', link: '/en/fe/concept/module' },
        { text: 'Programming questions', link: '/en/fe/coding/' }
      ]
    }
  ]
}

// VPS使用指南
export function Nav_Vps_en() {
  return [
    {
      items: [
        { text: 'Basic Settings', link: '/en/VPS/01' },
        { text: 'Advanced use', link: '/en/VPS/02' },
        { text: 'Build services', link: '/en/VPS/06' }
      ]
    }
  ]
}

