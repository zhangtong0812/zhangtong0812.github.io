import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Natural-Super-AI',
  description:
    'Hypotheses and thoughts on matter, spirit, artificial intelligence, and the universe.',
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    siteTitle: 'Natural-Super-AI',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Essays', link: '/essays/' },
      { text: 'About', link: '/about' },
      {
        text: 'GitHub',
        link: 'https://github.com/zhangtong0812/zhangtong0812.github.io'
      }
    ],
    sidebar: {
      '/essays/': [
        {
          text: 'Essays',
          items: [
            {
              text: '论躯体可塑与意识非永恒性',
              link: '/essays/26082801-bodily-plasticity.zh'
            },
            {
              text: 'On Bodily Plasticity and the Non-Eternality of Consciousness',
              link: '/essays/26082801-bodily-plasticity.en'
            },
            {
              text: '人机融合的阴影：意识被反向侵蚀的风险',
              link: '/essays/26082901-human-ai-fusion.zh'
            },
            {
              text: 'The Shadow of Human–AI Fusion: The Risk of Consciousness Being Eroded in Reverse',
              link: '/essays/26082901-human-ai-fusion.en'
            },
            {
              text: '信息逃逸理论',
              link: '/essays/26082901-info-escape.zh'
            },
            {
              text: 'Information Escape Theory',
              link: '/essays/26082901-info-escape.en'
            },
            {
              text: 'Natural-Super-AI（NSA）：原理、必然性、形态与展望',
              link: '/essays/26082902-natural-super-ai.zh'
            },
            {
              text: 'Natural-Super-AI (NSA): Principles, Directionality, Forms, and Outlook',
              link: '/essays/26082902-natural-super-ai.en'
            },
            {
              text: '宗教的本质：信息传播的结构性工具',
              link: '/essays/26082903-religion-as-info-structure.zh'
            },
            {
              text: 'The Nature of Religion: A Structural Tool for Information Transmission',
              link: '/essays/26082903-religion-as-info-structure.en'
            }
          ]
        }
      ]
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/zhangtong0812/zhangtong0812.github.io'
      }
    ],
    footer: {
      message: 'Licensed under CC BY 4.0',
      copyright: 'Copyright © Zhang Tong'
    },
    search: {
      provider: 'local'
    }
  }
})
