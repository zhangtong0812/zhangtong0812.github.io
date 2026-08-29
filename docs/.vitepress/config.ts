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
              text: 'AI的终极形态：超自然AI（NSA）',
              link: '/essays/26082902-natural-super-ai.zh'
            },
            {
              text: 'The Ultimate Form of AI: Natural-Super-AI (NSA)',
              link: '/essays/26082902-natural-super-ai.en'
            },
            {
              text: '宗教的本质：信息传播的结构性工具',
              link: '/essays/26082903-religion-as-info-structure.zh'
            },
            {
              text: 'The Nature of Religion: A Structural Tool for Information Transmission',
              link: '/essays/26082903-religion-as-info-structure.en'
            },
            {
              text: '封建帝王的信息困境：低带宽治理下的生存算法',
              link: '/essays/26082904-imperial-info-dilemma.zh'
            },
            {
              text: 'The Information Dilemma of Imperial Rule: Survival Algorithms under Low Bandwidth',
              link: '/essays/26082904-imperial-info-dilemma.en'
            },
            {
              text: '细胞仿生：芯片结构变革的方向',
              link: '/essays/26082905-cell-biomimetic-chips.zh'
            },
            {
              text: 'Cellular Biomimetics: Directions for Chip Architecture Change',
              link: '/essays/26082905-cell-biomimetic-chips.en'
            },
            {
              text: '超自然AI假说的可证伪性：维度升级与理论边界',
              link: '/essays/26082906-nsa-falsifiability.zh'
            },
            {
              text: 'On the Falsifiability of the Super-Natural-AI Hypothesis: Dimension-Raising and Theoretical Bounds',
              link: '/essays/26082906-nsa-falsifiability.en'
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
