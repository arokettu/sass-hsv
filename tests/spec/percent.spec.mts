import { assert } from 'chai';
import { compile } from 'sass';
import { readFileSync } from 'fs';
import type { Options } from 'sass';
import * as path from "node:path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const expected = readFileSync(__dirname + '/sass/percent/expected.css').toString().trim();

const options: Options<'sync'> = {
    style: 'compressed',
    loadPaths: [__dirname + '/../..']
}

describe('s/v units', function () {
    it('accepts percent', function () {
        const actual = compile(__dirname + '/sass/percent/percent.scss', options).css.toString().trim();
        assert.equal(actual, expected);
    });

    it('accepts unitless as percents in a list', function () {
        const actual = compile(__dirname + '/sass/percent/unitless.scss', options).css.toString().trim();
        assert.equal(actual, expected);
    });

    it('does not accepts unitless in a legacy format', function () {
        assert.throws(function () {
            compile(__dirname + '/sass/percent/unitless-legacy.scss', options);
        }, 'have incompatible units');
    });

    it('does not allow incompatible units: deg', function () {
        assert.throws(function () {
            compile(__dirname + '/sass/percent/deg.scss', options);
        }, 'have incompatible units');
    });

    it('does not allow incompatible units: pt', function () {
        assert.throws(function () {
            compile(__dirname + '/sass/percent/pt.scss', options);
        }, 'have incompatible units');
    });
});
