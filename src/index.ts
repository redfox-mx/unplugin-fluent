import type { UnpluginFactory, UnpluginMessage } from 'unplugin'
import { createUnplugin } from 'unplugin'
import { createFilter } from '@rollup/pluginutils'
import type { Options } from './types'
import { compile } from './core/compile'

const FLUENT_FILES_RE = /\.ftl(?:$|\?)/

export const unpluginFactory: UnpluginFactory<Options | undefined> = (options = {}) => {
  const filter = createFilter(
    options.include || FLUENT_FILES_RE,
    options.exclude,
  )

  return {
    name: 'unplugin-fluent',
    esbuild: {
      loader: 'js',
    },
    transformInclude(id) {
      return filter(id)
    },
    transform(raw) {
      try {
        const resource = compile(raw)
        const code = `export default { body: ${JSON.stringify(resource)} }`

        return {
          code,
          map: null,
        }
      } catch (e) {
        this.error(e as UnpluginMessage)
      }
    },
  }
}

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory)

export default unplugin
