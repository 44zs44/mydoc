import type { DefaultTheme } from 'vitepress'

// 侧边栏配置
export const sidebar: DefaultTheme.Config['sidebar'] = {
  // 前端物语
  '/en/fe/': { base: '/en/fe/', items: Sidebar_Fe_en() },
  // 文档记录
  '/en/skill/': { base: '/en/skill/', items: Sidebar_Skill_en() }
}

// 文档记录
export function Sidebar_Skill_en() {
  return [
    {
      // 分组名称
      text: 'daily records',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/en/skill/',
      // 分组页面
      items: [
        { text: 'Use nvm to manage different versions of node', link: 'JL-11' },
        { text: 'Sign Git Commit using GPG', link: 'JL-10' },
        {
          text: 'VitePress builds a personal front-end navigation website',
          link: 'JL-09'
        },
        { text: 'oh-my-zsh installation & configuration', link: 'JL-08' },
        { text: 'VitePress implements click-to-enlarge images', link: 'JL-07' },
        {
          text: 'NPM uses domestic mirrors and restores default sources',
          link: 'JL-06'
        },
        { text: 'Add Prettier formatting code to your project', link: 'JL-05' },
        { text: 'VS Code usage tips', link: 'JL-04' },
        { text: 'VitePress Add Giscu Comments', link: 'JL-03' },
        { text: 'PicGo + Github to build a picture bed', link: 'JL-01' }
      ]
    },
    {
      // 分组名称
      text: 'Getting Started Guide',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/en/skill/',
      // 分组页面
      items: [
        { text: 'Homebrew', link: 'RM-01' },
        { text: 'Git', link: 'RM-02' },
        { text: 'Docker', link: 'RM-03' },
        { text: 'Linux', link: 'RM-04' },
        { text: 'Markdown', link: 'RM-05' },
        { text: 'PNPM', link: 'RM-06' }
      ]
    },
    {
      // 分组名称
      text: 'Merlin operation documentation',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/en/skill/',
      // 分组页面
      items: [
        {
          text: 'What you need to know about flashing your machine',
          link: 'ML-01'
        },
        {
          text: 'Scientific Internet',
          collapsed: true,
          items: [
            { text: 'Scientific Internet - Install', link: 'ML-02' },
            { text: 'Scientific Internet - Configuration', link: 'ML-04' }
          ]
        },
        {
          text: 'Merlin Clash',
          collapsed: true,
          items: [
            { text: 'Merlin Clash - Install', link: 'ML-03' },
            { text: 'Merlin Clash - Configuration', link: 'ML-05' }
          ]
        }
      ]
    }
  ]
}

// 前端物语
export function Sidebar_Fe_en() {
  return [
    {
      // 分组名称
      text: 'JavaScript basic knowledge',
      // 下拉开关
      collapsed: false,
      // 分组路径
      base: '/en/fe/javascript/',
      // 分组页面
      items: [
        { text: 'Data Types', link: 'types' },
        { text: 'copy of reference type', link: 'clone' },
        { text: 'type conversion', link: 'conversions' },
        { text: 'Prototypes and prototype chains', link: 'prototype' },
        { text: 'inherit', link: 'inherit' }
      ]
    },
    {
      // 分组名称
      // text: "ES6 常用知识点",
      // 下拉开关
      // collapsed: false,
      // 分组路径
      base: '/en/fe/es6',
      // 分组页面
      items: [{ text: 'ES6 Common knowledge points', link: '/' }]
    },
    {
      // 分组名称
      text: 'TypeScript',
      // 下拉开关
      collapsed: false,
      // 分组路径
      base: '/en/fe/typescript/',
      // 分组页面
      items: [{ text: 'basic knowledge', link: 'base' }]
    },
    {
      // 分组名称
      text: 'HTML / CSS',
      // 下拉开关
      collapsed: false,
      // 分组路径
      base: '/en/fe/',
      // 分组页面
      items: [
        { text: 'HTML theoretical knowledge points', link: 'html/' },
        { text: 'CSS theoretical knowledge points', link: 'css/' }
      ]
    },
    {
      // 分组名称
      text: 'Engineering project principles',
      // 下拉开关
      collapsed: false,
      // 分组路径
      base: '/en/fe/gc/',
      // 分组页面
      items: [
        { text: 'master package ', link: 'GC-01' },
        { text: 'master tsconfig ', link: 'GC-02' },
        { text: 'JS Modular principle ', link: 'GC-03' }
      ]
    },
    {
      // 分组名称
      text: 'Browser knowledge',
      // 下拉开关
      collapsed: false,
      // 分组路径
      base: '/en/fe/',
      // 分组页面
      items: [
        { text: 'Browser related knowledge points', link: 'browser/' },
        { text: 'TCP', link: 'network/tcp' },
        { text: 'HTTP', link: 'network/http' }
      ]
    },
    {
      // 分组名称
      text: 'Concept knowledge points',
      // 下拉开关
      collapsed: false,
      // 分组路径
      base: '/en/fe/concept/',
      // 分组页面
      items: [
        { text: 'Modular', link: 'module' },
        { text: 'Front-end page rendering method', link: 'page-rendering' }
      ]
    },
    {
      // 分组名称
      // text: "编程题",
      // 下拉开关
      collapsed: false,
      // 分组路径
      base: '/en/fe/',
      // 分组页面
      items: [{ text: 'Programming questions', link: 'coding/' }]
    }
  ]
}
