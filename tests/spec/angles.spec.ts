import { assert } from 'chai';
import { compile } from 'sass';
import { readFileSync } from 'fs';
import { Options } from 'sass/types/options';

const expected = readFileSync(__dirname + '/sass/angles/expected.css').toString().trim();

const options: Options<'sync'> = {
    style: 'compressed',
}

describe('angle units', function () {
    it('accepts unitless as degrees', function () {
        const actual = compile(__dirname + '/sass/angles/unitless.scss', options).css.toString().trim();
        assert.equal(actual, expected);
    });

    it('accepts degrees', function () {
        const actual = compile(__dirname + '/sass/angles/deg.scss', options).css.toString().trim();
        assert.equal(actual, expected);
    });

    it('accepts radians', function () {
        const actual = compile(__dirname + '/sass/angles/rad.scss', options).css.toString().trim();
        assert.equal(actual, expected);
    });

    it('accepts turns', function () {
        const actual = compile(__dirname + '/sass/angles/turn.scss', options).css.toString().trim();
        assert.equal(actual, expected);
    });

    it('accepts grads', function () {
        const actual = compile(__dirname + '/sass/angles/grad.scss', options).css.toString().trim();
        assert.equal(actual, expected);
    });

    it('does not allow incompatible units: %', function () {
        assert.throws(function () {
            compile(__dirname + '/sass/angles/percent.scss', options);
        });
    });

    it('does not allow incompatible units: pt', function () {
        assert.throws(function () {
            compile(__dirname + '/sass/angles/pt.scss', options);
        });
    });
});
