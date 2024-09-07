import path from 'path'
import fs from 'fs'
import { describe, expect, it } from 'vitest'
import webpack from 'webpack'
import fluent from '../src/webpack'

describe('webpack', () => {
  describe('fixtures', () => {
    it('compiles fluent files', async () => {
      const filePath = path.resolve(__dirname, '__snapshots__/webpack.snap')
      await new Promise((resolve) => {
        webpack({
          entry: path.resolve(__dirname, 'fixture/importer.js'),
          plugins: [fluent()],
          experiments: {
            outputModule: true,
          },
          output: {
            path: path.resolve(__dirname, '__snapshots__'),
            filename: 'webpack.snap',
            library: {
              type: 'module',
            },
          },
        }).run(resolve)
      })

      const file = fs.readFileSync(filePath, 'utf-8')
      expect(file).toMatchFileSnapshot(filePath)
    })
  })
})
