import del from 'rollup-plugin-delete'
import babel from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

const isProduction = ['production', 'prod'].includes(process.env.NODE_ENV ?? 'prod')

export default {
	input: 'src/index.mjs',
	output: {
		format: 'umd',
    name: 'StoneJSHttp',
		file: 'dist/index.js',
    plugins: isProduction ? [terser()] : [],
    sourcemap: isProduction ? false : 'inline'
	},
  plugins: [
    resolve(),
    babel({ babelHelpers: 'bundled' }),
    commonjs(),
    del({ targets: 'dist/*', runOnce: true }),
  ]
};