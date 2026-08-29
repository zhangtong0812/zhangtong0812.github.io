<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import Utterances from './Utterances.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-after>
      <Utterances />
    </template>
  </Layout>
</template>
