import { assert } from 'chai';
import { compile } from 'sass';
import { readFileSync } from 'fs';
import { Options } from 'sass/types/options';

const expected = readFileSync(__dirname + '/sass/aliases/expected.css').toString().trim();
const expectedAlpha = readFileSync(__dirname + '/sass/aliases/expected-alpha.css').toString().trim();

const options: Options<'sync'> = {
    style: 'compressed',
}

describe('hsv()', function () {
    it('works', function () {
        const actual = compile(__dirname + '/sass/aliases/hsv-test.scss', options).css.toString().trim();
        assert.equal(actual, expected);
    });
});

describe('hsb()', function () {
    it('works', function () {
        const actual = compile(__dirname + '/sass/aliases/hsb.scss', options).css.toString().trim();
        assert.equal(actual, expected);
    });
});

describe('hsva()', function () {
    it('works', function () {
        const actual = compile(__dirname + '/sass/aliases/hsva.scss', options).css.toString().trim();
        assert.equal(actual, expectedAlpha);
    });

    it('requires alpha param', function () {
        assert.throws(function () {
            compile(__dirname + '/sass/aliases/hsva-error.scss', options);
        });
    });
});

describe('hsba()', function () {
    it('works', function () {
        const actual = compile(__dirname + '/sass/aliases/hsba.scss', options).css.toString().trim();
        assert.equal(actual, expectedAlpha);
    });

    it('requires alpha param', function () {
        assert.throws(function () {
            compile(__dirname + '/sass/aliases/hsba-error.scss', options);
        });
    });
});
