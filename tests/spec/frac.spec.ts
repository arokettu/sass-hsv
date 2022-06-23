'use strict';

const chai = require('chai');
const assert = chai.assert;

const sass = require('sass');
const fs = require('fs');

const expected = fs.readFileSync(__dirname + '/sass/frac/expected.css').toString().trim();

describe('fraction units', function () {
    it('accepts unitless as fractions', function () {
        const actual = sass.renderSync({
            file: __dirname + '/sass/frac/fraction.scss',
            outputStyle: 'compressed',
        }).css.toString().trim();

        assert.equal(actual, expected);
    });

    it('accepts percent', function () {
        const actual = sass.renderSync({
            file: __dirname + '/sass/frac/percent.scss',
            outputStyle: 'compressed',
        }).css.toString().trim();

        assert.equal(actual, expected);
    });

    it('does not allow incompatible units: deg', function () {
        assert.throws(function () {
            sass.renderSync({
                file: __dirname + '/sass/frac/deg.scss',
                outputStyle: 'compressed',
            });
        });
    });

    it('does not allow incompatible units: pt', function () {
        assert.throws(function () {
            sass.renderSync({
                file: __dirname + '/sass/frac/pt.scss',
                outputStyle: 'compressed',
            });
        });
    });
});
