import { defineConfig } from 'vitepress'
import cn from './cn'

export default defineConfig({
  locales: {
    root: {
      label: '简体中文',
      lang: cn.lang,
      themeConfig: cn.themeConfig,
      description: cn.description
    }
  }
})
