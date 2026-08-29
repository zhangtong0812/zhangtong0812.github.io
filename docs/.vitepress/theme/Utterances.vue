<script setup lang="ts">
import { computed, onMounted, watch, nextTick } from 'vue'
import { useData, useRoute, inBrowser } from 'vitepress'

const route = useRoute()
const { isDark, page, frontmatter } = useData()

const repo = 'zhangtong0812/zhangtong0812.github.io'

const showComments = computed(() => {
  if (frontmatter.value.hideComment) return false
  const path = page.value.relativePath.replace(/\\/g, '/')
  return path.startsWith('essays/') && path !== 'essays/index.md'
})

function setUtterancesTheme() {
  const iframe = document.querySelector<HTMLIFrameElement>('.utterances-frame')
  iframe?.contentWindow?.postMessage(
    { type: 'set-theme', theme: isDark.value ? 'github-dark' : 'github-light' },
    'https://utteranc.es'
  )
}

function loadUtterances() {
  if (!inBrowser || !showComments.value) return

  const container = document.getElementById('utterances-container')
  if (!container) return

  container.innerHTML = ''

  const script = document.createElement('script')
  script.src = 'https://utteranc.es/client.js'
  script.async = true
  script.crossOrigin = 'anonymous'
  script.setAttribute('repo', repo)
  script.setAttribute('issue-term', 'pathname')
  script.setAttribute('label', 'comment')
  script.setAttribute('theme', isDark.value ? 'github-dark' : 'github-light')
  container.appendChild(script)
}

onMounted(() => {
  nextTick(loadUtterances)
})

watch(
  () => route.path,
  () => nextTick(loadUtterances)
)

watch(isDark, () => {
  setUtterancesTheme()
})
</script>

<template>
  <div
    v-if="showComments"
    class="utterances-wrap"
  >
    <h2 class="utterances-title">留言</h2>
    <p class="utterances-hint">
      使用 GitHub 账号登录后即可留言。私信请发邮件至
      <code>zhangtong0812[at]gmail.com</code>（将 <code>[at]</code> 换成 <code>@</code>）。
    </p>
    <div id="utterances-container" />
  </div>
</template>

<style scoped>
.utterances-wrap {
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--vp-c-divider);
}

.utterances-title {
  margin: 0 0 0.5rem;
  font-size: 1.35rem;
  font-weight: 600;
  border: none;
  padding: 0;
}

.utterances-hint {
  margin: 0 0 1rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.utterances-hint code {
  font-size: 0.85em;
}
</style>
