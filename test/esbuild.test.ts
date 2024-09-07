import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { build } from 'esbuild'
import fluent from '../src/esbuild'

async function getCode() {
  const out = (await build({
    entryPoints: [resolve(__dirname, 'fixture/importer.js')],
    bundle: true,
    format: 'esm',
    plugins: [fluent()],
    write: false,
  }))

  return out.outputFiles.map(file => file.text).join('\n')
}

describe('esbuild', () => {
  describe('fixtures', () => {
    it('compiles fluent files', async () => {
      const code = await getCode()
      expect(code).toMatchSnapshot()
    })
  })
})
