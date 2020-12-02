import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import copy from 'rollup-plugin-copy';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
// import typescript from '@rollup/plugin-typescript';
import serve from 'rollup-plugin-serve';
import externalGlobals from "rollup-plugin-external-globals";

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/index.js',
    external: ['cesium'],
    output: {
        file: 'dist/bundle.js',
        format: 'iife', // immediately-invoked function expression — suitable for <script> tags
        sourcemap: true
    },
    plugins: [
        // replace({
        //     'cesium': 'Cesium'
        // }),
        // typescript(),
        externalGlobals({
            cesium: "Cesium"
        }),
        copy({
            targets: [

                { src: 'node_modules/cesium/Build/Cesium/*', dest: 'dist' },
                // { src: 'node_modules/cesium/Build/Cesium/Workers', dest: 'dist' },
                // { src: 'node_modules/cesium/Build/Cesium/ThirdParty', dest: 'dist' },
                // { src: 'node_modules/cesium/Build/Cesium/Assets', dest: 'dist' },
                // { src: 'node_modules/cesium/Build/Cesium/Widgets', dest: 'dist' },
                { src: 'node_modules/cesium/Build/Cesium/Widgets/widgets.css', dest: 'dist' },
                { src: 'node_modules/cesium/Build/Cesium/Widgets/Images/TimelineIcons.png', dest: 'dist/Images' },
                { src: 'src/index.html', dest: 'dist' }
            ],
            copyOnce: true
        }),
        resolve(),
        // commonjs(),
        !production && serve({
            open: true,
            contentBase: 'dist'
        }),
        !production && livereload(),
        production && terser() // minify, but only in production

    ]
};