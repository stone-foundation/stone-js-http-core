import path from 'path'
import { URL } from 'url'
import del from 'rollup-plugin-delete'
import terser from '@rollup/plugin-terser'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

const getFilename = (relativePath = '') => {
  return new URL(relativePath, import.meta.url).pathname
}

const getDirectory = (relativePath = '') => {
  return path.dirname(getFilename(relativePath))
}

const isProduction = ['production', 'prod'].includes(process.env.NODE_ENV)

export default {
	input: 'src/index.mjs',
	output: {
		format: 'umd',
    name: 'StoneJSHttp',
		file: 'dist/index.js',
    plugins: [terser()],
    sourcemap: isProduction ? false : 'inline'
	},
  plugins: [
    resolve(),
    babel({ babelHelpers: 'bundled' }),
    commonjs(),
    del({ targets: 'dist/*', runOnce: true }),
  ]
};