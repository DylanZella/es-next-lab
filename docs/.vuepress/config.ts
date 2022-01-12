import {defineUserConfig} from 'vuepress';
import type {DefaultThemeOptions} from 'vuepress';

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'ES6+ 文档',
      description: '中文文档',
    },
    '/en/': {
      lang: 'en-US',
      title: 'ES Next',
      description: 'English version',
    },
  },

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/favicon.ico',
    // 语言配置
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
      },
      '/en/': {
        selectLanguageName: 'English',
      },
    },
    navbar: [
      {
        text: 'Test',
        link: '/guide/README.md',
      },
      '/README.md',
      '/guide/About.md',
    ],
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/zh/': {
            placeholder: '搜索',
          },
        },
      },
    ],
  ],
});
