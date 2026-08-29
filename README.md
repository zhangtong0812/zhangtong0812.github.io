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

## Essay formatting

Layout rules for all essays: [`排版策略.md`](./排版策略.md)

## Essay footer

All essays share one author/license block:

- Source of truth: `docs/snippets/_author-license.md`
- Each essay ends with: `<!--@include: ../snippets/_author-license.md-->`

Edit the snippet once to update every article.
