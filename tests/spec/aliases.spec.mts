import { assert } from 'chai';
import { compile } from 'sass';
import { readFileSync } from 'fs';
import type { Options } from 'sass';
import * as path from "node:path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const expected = readFileSync(__dirname + '/sass/aliases/expected.css').toString().trim();
const expectedAlpha = readFileSync(__dirname + '/sass/aliases/expected-alpha.css').toString().trim();

const options: Options<'sync'> = {
    style: 'compressed',
    loadPaths: [__dirname + '/../..']
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
        }, 'Missing argument $a');
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
        }, 'Missing argument $a');
    });
});
