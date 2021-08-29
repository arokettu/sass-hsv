'use strict';

const chai = require('chai');
const assert = chai.assert;

it('works with node-sass', function () {
    const sass = require('node-sass');
    const fs = require('fs');

    const actual = sass.renderSync({
        file: __dirname + '/sass/node-sass.scss',
        outputStyle: 'compressed',
    }).css;

    const expected = fs.readFileSync(__dirname + '/sass/node-sass-result.css');

    assert.equal(actual.toString(), expected.toString());
});
