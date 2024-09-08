/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Options } from './types'

import fluent from '.'

export default (options: Options): any => ({
  name: 'unplugin-fluent',
  hooks: {
    'astro:config:setup': async (astro: any) => {
      astro.config.vite.plugins ||= []
      astro.config.vite.plugins.push(fluent.vite(options))
    },
  },
})
