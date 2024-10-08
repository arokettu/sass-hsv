# sass-hsv

[![npm](https://img.shields.io/npm/v/sass-hsv?style=flat-square)](https://www.npmjs.com/package/sass-hsv)
[![NPM](https://img.shields.io/npm/l/sass-hsv?style=flat-square)](https://www.npmjs.com/package/sass-hsv)
[![Gitlab pipeline status](https://img.shields.io/gitlab/pipeline/sandfox/sass-hsv/master.svg?style=flat-square)](https://gitlab.com/sandfox/sass-hsv/-/pipelines)

A simple helper to introduce [HSV/HSB] model support to SASS.

## Usage

The helper tries to mimic `hsl()` syntax from css.

```scss
// adjust for your favorite importer
@use "~sass-hsv" as *;

a {
    // the simplest
    color: hsv(270, 50%, 100%); // #bf7fff
    // use other angle units for h and fractions for s & v
    color: hsv(0.75turn, 0.5, 1); // #bf7fff
    // use alpha channel
    color: hsv(270, 50%, 100%, 0.5); // rgba(191, 127, 255, 0.5)

    // aliases
    color: hsb(270, 50%, 100%); // same as hsv()
    color: hsva(270, 50%, 100%, 1); // same as hsv($h, $s, $v, $a) but alpha param is required
    color: hsba(270, 50%, 100%, 1); // same as hsva()
}
```

## Documentation

Read full documentation here: <https://sandfox.dev/js/sass-hsv.html>

Also on Read the Docs: <https://sass-hsv.readthedocs.io/>

## Support

Please file issues on our main repo at GitLab: <https://gitlab.com/sandfox/sass-hsv/-/issues>

## License

The library is available as open source under the terms of the [MIT License].

[HSV/HSB]: https://en.wikipedia.org/wiki/HSL_and_HSV
[MIT License]:  https://opensource.org/licenses/MIT
