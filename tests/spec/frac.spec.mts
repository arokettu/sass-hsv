import { assert } from 'chai';
import { compile } from 'sass';
import { readFileSync } from 'fs';
import type { Options } from 'sass';
import * as path from "node:path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const expected = readFileSync(__dirname + '/sass/frac/expected.css').toString().trim();

const options: Options<'sync'> = {
    style: 'compressed',
    loadPaths: [__dirname + '/../..']
}

describe('fraction units', function () {
    it('accepts unitless as fractions', function () {
        const actual = compile(__dirname + '/sass/frac/fraction.scss', options).css.toString().trim();
        assert.equal(actual, expected);
    });

    it('accepts percent', function () {
        const actual = compile(__dirname + '/sass/frac/percent.scss', options).css.toString().trim();
        assert.equal(actual, expected);
    });

    it('does not allow incompatible units: deg', function () {
        assert.throws(function () {
            compile(__dirname + '/sass/frac/deg.scss', options);
        });
    });

    it('does not allow incompatible units: pt', function () {
        assert.throws(function () {
            compile(__dirname + '/sass/frac/pt.scss', options);
        });
    });
});
