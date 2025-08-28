import { assert } from 'chai';
import {compile, type Options} from 'sass';
import { readFileSync } from 'fs';
import * as path from "node:path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const expected = readFileSync(__dirname + '/sass/syntaxes/expected.css').toString().trim();
const expectedAlpha = readFileSync(__dirname + '/sass/syntaxes/expected-alpha.css').toString().trim();

const options: Options<'sync'> = {
    style: 'compressed',
    loadPaths: [__dirname + '/../..']
}

describe('syntaxes', function () {
    it('classic: hsv(270, 50%, 100%)', function () {
        const actual = compile(__dirname + '/sass/syntaxes/hsv-classic.scss', options).css.toString().trim();
        assert.equal(actual, expected);
    });

    it('classic alpha: hsv(270, 50%, 100%, 0.5)', function () {
        const actual = compile(__dirname + '/sass/syntaxes/hsva-classic.scss', options).css.toString().trim();
        assert.equal(actual, expectedAlpha);
    });

    it('list: hsv(270 50% 100%)', function () {
        const actual = compile(__dirname + '/sass/syntaxes/hsv-list.scss', options).css.toString().trim();
        assert.equal(actual, expected);
    });

    it('list alpha: hsv(270 50% 100% / 0.5)', function () {
        const actual = compile(__dirname + '/sass/syntaxes/hsva-list.scss', options).css.toString().trim();
        assert.equal(actual, expectedAlpha);
    });
});
