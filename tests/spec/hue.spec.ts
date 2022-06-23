import { assert } from 'chai';
import { compile } from 'sass';
import { readFileSync } from 'fs';

describe('check all hue values with 10 degree step to verify all h1 branches', function () {
    it('is valid', function () {
        const actual = compile(__dirname + '/sass/hue/all-degrees.scss', {
            style: 'expanded',
        }).css.toString().trim();
        const expected = readFileSync(__dirname + '/sass/hue/expected.css').toString().trim();

        assert.equal(actual, expected);
    });
});
