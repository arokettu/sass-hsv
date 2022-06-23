import { assert } from 'chai';
import { renderSync } from 'node-sass';
import { readFileSync } from 'fs';

describe('legacy libsass support' , function () {
    it('works with node-sass', function () {
        const actual = renderSync({
            file: __dirname + '/sass/node-sass/node-sass.scss',
            outputStyle: 'compressed',
        }).css;
        const expected = readFileSync(__dirname + '/sass/node-sass/expected.css');

        assert.equal(actual.toString(), expected.toString());
    });
});
