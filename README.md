# sass-hsv

[![npm](https://img.shields.io/npm/v/sass-hsv?style=flat-square)](https://www.npmjs.com/package/sass-hsv)
[![NPM](https://img.shields.io/npm/l/sass-hsv?style=flat-square)](https://www.npmjs.com/package/sass-hsv)

A simple helper to introduce [HSV/HSB] model support to SASS.

## Usage

The helper tries to mimic `hsl()` syntax from css.

The easiest way to import the helper is to use [node-sass-package-importer].

```scss
// node-sass-package-importer path syntax, adjust for your favorite importer
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

## License

The library is available as open source under the terms of the [MIT License].

[HSV/HSB]: https://en.wikipedia.org/wiki/HSL_and_HSV
[node-sass-package-importer]: https://www.npmjs.com/package/node-sass-package-importer
[MIT License]:  https://opensource.org/licenses/MIT
