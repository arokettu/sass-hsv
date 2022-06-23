'use strict';

const chai = require('chai');
const assert = chai.assert;

const sass = require('sass');
const fs = require('fs');

const expected = fs.readFileSync(__dirname + '/sass/angles/expected.css').toString().trim();

describe('angle units', function () {
    it('accepts unitless as degrees', function () {
        const actual = sass.renderSync({
            file: __dirname + '/sass/angles/unitless.scss',
            outputStyle: 'compressed',
        }).css.toString().trim();

        assert.equal(actual, expected);
    });

    it('accepts degrees', function () {
        const actual = sass.renderSync({
            file: __dirname + '/sass/angles/deg.scss',
            outputStyle: 'compressed',
        }).css.toString().trim();

        assert.equal(actual, expected);
    });

    it('accepts radians', function () {
        const actual = sass.renderSync({
            file: __dirname + '/sass/angles/rad.scss',
            outputStyle: 'compressed',
        }).css.toString().trim();

        assert.equal(actual, expected);
    });

    it('accepts turns', function () {
        const actual = sass.renderSync({
            file: __dirname + '/sass/angles/turn.scss',
            outputStyle: 'compressed',
        }).css.toString().trim();

        assert.equal(actual, expected);
    });

    it('accepts grads', function () {
        const actual = sass.renderSync({
            file: __dirname + '/sass/angles/grad.scss',
            outputStyle: 'compressed',
        }).css.toString().trim();

        assert.equal(actual, expected);
    });

    it('does not allow incompatible units: %', function () {
        assert.throws(function () {
            sass.renderSync({
                file: __dirname + '/sass/angles/percent.scss',
                outputStyle: 'compressed',
            });
        });
    });

    it('does not allow incompatible units: pt', function () {
        assert.throws(function () {
            sass.renderSync({
                file: __dirname + '/sass/angles/pt.scss',
                outputStyle: 'compressed',
            });
        });
    });
});
