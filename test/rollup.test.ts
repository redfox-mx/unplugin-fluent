import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { rollup } from 'rollup'
import fluent from '../src/rollup'

async function getCode() {
  const bundle = (await rollup({
    plugins: [fluent()],
    input: resolve(__dirname, 'fixture/importer.js'),
  }))

  const output = await bundle.generate({ format: 'esm' })
  return output.output.map((file) => {
    if (file.type === 'chunk') {
      return `//${file.fileName}\n${file.code}`
    } else {
      return file.fileName
    }
  }).join('\n')
}

describe('rollup', () => {
  describe('fixtures', () => {
    for (const isProd of [true, false]) {
      it(`is prod environment ${isProd}`, async () => {
        process.env.NODE_ENV = isProd ? 'production' : 'development'

        const code = await getCode()
        expect(code).toMatchSnapshot()
      })
    }
  })
})
