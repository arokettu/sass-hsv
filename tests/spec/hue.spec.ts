'use strict';

const chai = require('chai');
const assert = chai.assert;

const sass = require('sass');
const fs = require('fs');

describe('check all hue values with 10 degree step to verify all h1 branches', function () {
    it('is valid', function () {
        const actual = sass.renderSync({
            file: __dirname + '/sass/hue/all-degrees.scss',
            outputStyle: 'expanded',
        }).css.toString().trim();

        const expected = fs.readFileSync(__dirname + '/sass/hue/expected.css').toString().trim();

        assert.equal(actual, expected);
    });
});
