'use strict';

const chai = require('chai');
const assert = chai.assert;

const sass = require('sass');
const fs = require('fs');

const expected = fs.readFileSync(__dirname + '/sass/aliases/expected.css').toString().trim();
const expectedAlpha = fs.readFileSync(__dirname + '/sass/aliases/expected-alpha.css').toString().trim();

describe('hsv()', function () {
    it('works', function () {
        const actual = sass.renderSync({
            file: __dirname + '/sass/aliases/hsv-test.scss',
            outputStyle: 'compressed',
        }).css.toString().trim();

        assert.equal(actual, expected);
    });
});

describe('hsb()', function () {
    it('works', function () {
        const actual = sass.renderSync({
            file: __dirname + '/sass/aliases/hsb.scss',
            outputStyle: 'compressed',
        }).css.toString().trim();

        assert.equal(actual, expected);
    });
});

describe('hsva()', function () {
    it('works', function () {
        const actual = sass.renderSync({
            file: __dirname + '/sass/aliases/hsva.scss',
            outputStyle: 'compressed',
        }).css.toString().trim();

        assert.equal(actual, expectedAlpha);
    });

    it('requires alpha param', function () {
        assert.throws(function () {
            sass.renderSync({
                file: __dirname + '/sass/aliases/hsva-error.scss',
                outputStyle: 'compressed',
            });
        });
    });
});

describe('hsba()', function () {
    it('works', function () {
        const actual = sass.renderSync({
            file: __dirname + '/sass/aliases/hsba.scss',
            outputStyle: 'compressed',
        }).css.toString().trim();

        assert.equal(actual, expectedAlpha);
    });

    it('requires alpha param', function () {
        assert.throws(function () {
            sass.renderSync({
                file: __dirname + '/sass/aliases/hsba-error.scss',
                outputStyle: 'compressed',
            });
        });
    });
});
