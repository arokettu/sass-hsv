sass-hsv
########

|npm| |GitLab| |GitHub| |Codeberg| |Gitea|

A simple helper to introduce `HSV/HSB`_ model support to SASS.

Usage
=====

The helper tries to mimic ``hsl()`` syntax from css.

Dart Sass
---------

Just import the module:

.. don't ask why scilab, it just works

.. code-block:: scilab

    // adjust for your favorite importer
    @use "~sass-hsv/hsv" as *;
    @use "sass:list";

    a {
        // the simplest
        color: hsv(270, 50%, 100%); // #bf7fff
        // use other angle units for h and unitless percents for s & v
        color: hsv(0.75turn 50 100); // #bf7fff, only with list syntax
        // use alpha channel
        color: hsv(270, 50%, 100%, 0.5); // rgba(191, 127, 255, 0.5)

        // aliases
        color: hsb(270, 50%, 100%); // same as hsv()
        color: hsva(270, 50%, 100%, 1); // same as hsv($h, $s, $v, $a) but alpha param is required
        color: hsba(270, 50%, 100%, 1); // same as hsva()

        // list syntax (since 2.0)
        color: hsv(270 50% 100%);
        color: hsv(270 50% 100% / 50%); // once it's available in sass
        color: hsv(list.slash(270 50% 100%, 50%)); // available today
    }

License
=======

The library is available as open source under the terms of the `MIT License`_.

.. _HSV/HSB:        https://en.wikipedia.org/wiki/HSL_and_HSV
.. _MIT License:    https://opensource.org/licenses/MIT

.. |npm|        image:: https://img.shields.io/npm/v/sass-hsv.svg?style=flat-square
   :target:     https://www.npmjs.com/package/sass-hsv
.. |GitHub|     image:: https://img.shields.io/badge/get%20on-GitHub-informational.svg?style=flat-square&logo=github
   :target:     https://github.com/arokettu/sass-hsv
.. |GitLab|     image:: https://img.shields.io/badge/get%20on-GitLab-informational.svg?style=flat-square&logo=gitlab
   :target:     https://gitlab.com/sandfox/sass-hsv
.. |Codeberg|   image:: https://img.shields.io/badge/get%20on-Codeberg-informational.svg?style=flat-square&logo=codeberg
   :target:     https://codeberg.org/sandfox/sass-hsv
.. |Gitea|      image:: https://img.shields.io/badge/get%20on-Gitea-informational.svg?style=flat-square&logo=gitea
   :target:     https://sandfox.org/sandfox/sass-hsv
