import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { build } from 'vite'
import fluent from '../src/vite'
import { RollupOutput } from 'rollup'

async function getCode() {
  const bundle = (await build({
    plugins: [fluent()],
    build: {
      lib: {
        entry: resolve(__dirname, 'fixture/importer.js'),
        formats: ['es'],
      },
    },
  })) as RollupOutput[]

  const [output] = bundle
  return output.output.map((file) => {
    if (file.type === 'chunk') {
      return `//${file.fileName}\n${file.code}`
    } else {
      return file.fileName
    }
  }).join('\n')
}

describe('vite', () => {
  describe('fixtures', () => {
    for (const isProd of [false, true]) {
      it(`is prod environment ${isProd}`, async () => {
        process.env.NODE_ENV = isProd ? 'production' : 'development'

        const code = await getCode()
        expect(code).toMatchSnapshot()
      })
    }
  })
})
