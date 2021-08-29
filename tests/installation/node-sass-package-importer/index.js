'use strict';

const sass = require('sass');
const packageImporter = require('node-sass-package-importer');
const fs = require('fs');
const process = require('process');

const css = sass.renderSync({
    file: 'test.scss',
    outputStyle: 'compressed',
    importer: packageImporter(),
})

const data = fs.readFileSync('../test_result.css');

if (Buffer.compare(css.css, data) !== 0) {
    console.log('css content is different');
    console.log(`expected: "${data}"`);
    console.log(`actual:   "${css.css}"`);
    process.exit(1);
}

console.log('import is successful');
