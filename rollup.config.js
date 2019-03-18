import commonjs from 'rollup-plugin-commonjs'
import rollupTypescript from 'rollup-plugin-typescript2'
import resolve from 'rollup-plugin-node-resolve'

import pkg from './package.json'

const externalIds = ['docz-core']

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  external: function(id, parent, isResolved) {
    return !!(id && externalIds.some(e => id.startsWith(e)))
  },
  plugins: [
    resolve(),
    commonjs({}),
    rollupTypescript({
      tsconfig: 'tsconfig.json',
    }),
  ],
}
