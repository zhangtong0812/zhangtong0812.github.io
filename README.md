# Zhang Tong's blog (VitePress + GitHub Pages)

Site: https://zhangtong0812.github.io/

## Local preview

```bash
npm install
npm run docs:dev
```

## Build

```bash
npm run docs:build
```

## Essay comments (Utterances)

Essay pages load a public comment box via [Utterances](https://utteranc.es/) (GitHub Issues).

**One-time setup (repo owner):**

1. Open https://github.com/apps/utterances  
2. Install for `zhangtong0812/zhangtong0812.github.io` (or all repos)  
3. Optional: create a GitHub label named `comment` on the repo  

Readers comment with a GitHub account. Each essay path maps to one Issue.

## Essay formatting

Layout rules for all essays: [`排版策略.md`](./排版策略.md)

## Essay footer

All essays share one author/license block:

- Source of truth: `docs/snippets/_author-license.md`
- Each essay ends with: `<!--@include: ../snippets/_author-license.md-->`

Edit the snippet once to update every article.
