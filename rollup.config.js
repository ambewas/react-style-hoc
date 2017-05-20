const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify-es');
const minify = require('uglify-es').minify;
const jsx = require('rollup-plugin-jsx');

export default {
    entry: 'src/index.js',
    format: 'umd',
    external: [
        // add external packages here
        // e.g. 'rxjs/Observable'
        'ramda',
        'react'
    ],
    dest: 'dist/index.js',
    sourceMap: true,
    moduleId: 'react-style-hoc',
    moduleName: 'Style',
    globals: {
        // add external packages as globals here
        // e.g. 'rxjs/Observable': 'rxjs_Observable'
        'ramda': 'ramda',
        'react': 'react'
    },
    plugins: [
        jsx({ factory: 'React.createElement' }),
        babel({
            babelrc: false,
            presets: ['es2015-rollup'],
            plugins: ['transform-object-rest-spread', 'external-helpers'],
            exclude: 'node_modules/**'
        }),
        // uglify({}, minify)
    ]
};
