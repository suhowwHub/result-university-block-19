import styles from "rollup-plugin-styles";
import image from '@rollup/plugin-image';
import { babel } from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
    input: './task-one/src/index.js',
    output: {
        file: 'dist/bundle.main.js',
        format: 'es'
    },
    plugins: [
        styles(),
        image(),
        babel({ babelHelpers: 'bundled' }),
        serve('dist'),
        livereload(),
    ]
}