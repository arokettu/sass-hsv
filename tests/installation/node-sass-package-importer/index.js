'use strict';

const sass = require('sass');
const packageImporter = require('node-sass-package-importer')();
const fs = require('fs');
const process = require('process');

const css = sass.compile('test.scss', {
    style: 'compressed',
    importers: [{
        findFileUrl(url) {
            return new URL('file://' + packageImporter(url).file)
        }
    }],
})

const data = fs.readFileSync('../test_result.css').toString();

if (css.css !== data) {
    console.log('css content is different');
    console.log(`expected: "${data}"`);
    console.log(`actual:   "${css.css}"`);
    process.exit(1);
}

console.log('import is successful');
