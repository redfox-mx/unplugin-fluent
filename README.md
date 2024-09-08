# unplugin-fluent [![npm](https://img.shields.io/npm/v/unplugin-fluent.svg)](https://npmjs.com/package/unplugin-fluent)

> Use all the power of the fluent project with your favorite bundler/compiler 🌊

[![ci](https://github.com/redfox-mx/unplugin-fluent/actions/workflows/ci.yml/badge.svg)](https://github.com/redfox-mx/unplugin-fluent/actions/workflows/ci.yml)
![test](https://img.shields.io/badge/test-vite-orange)
![test](https://img.shields.io/badge/test-webpack-blue)
![test](https://img.shields.io/badge/test-rollup-yellow)
![test](https://img.shields.io/badge/test-esbuild-red)

Transform your fluent files into compiled fluent resources

## Usage

Import your .ftl files, that's all!!!

```ts
import enUs from './locales/en-us.ftl'
import esMx from './locales/es-mx.ftl'

// create your bundles
const bundle = new FluentBundle('en-US', { useIsolating: false })
const bundle = new FluentBundle('es-MX', { useIsolating: false })

```


## Install

```bash
npm i -D @fluent/bundle unplugin-fluent

pnpm add -D @fluent/bundle unplugin-fluent
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import fluent from 'unplugin-fluent/vite'

export default defineConfig({
  plugins: [
    fluent({ /* options */ }),
  ],
})
```

Example: [`playground/`](./playground/)

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import fluent from 'unplugin-fluent/rollup'

export default {
  plugins: [
    fluent({ /* options */ }),
  ],
}
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-fluent/webpack')({ /* options */ })
  ]
}
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default defineNuxtConfig({
  modules: [
    ['unplugin-fluent/nuxt', { /* options */ }],
  ],
})
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-fluent/webpack')({ /* options */ }),
    ],
  },
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'
import fluent from 'unplugin-fluent/esbuild'

build({
  plugins: [fluent()],
})
```

<br></details>

> Note: Unplugin fluent compiles your fluent files into FluentResources, sometimes this behavior can increase ypur bundle size in favor of performance
