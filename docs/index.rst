sass-hsv
########

|npm| |GitLab| |GitHub| |Bitbucket| |Gitea|

A simple helper to introduce `HSV/HSB`_ model support to SASS.

Usage
=====

The helper tries to mimic ``hsl()`` syntax from css.

The easiest way to import the helper is to use node-sass-package-importer_.

Dart Sass
---------

Just import the module:

.. don't ask why scilab, it just works

.. code-block:: scilab

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

libsass
-------

The package is designed for ``sass`` / Dart Sass with modules but it has support of ``node-sass`` / ``libsass``.
You need to import the legacy module explicitly:

.. code-block:: scilab

    // node-sass-package-importer path syntax, adjust for your favorite importer
    @import "~sass-hsv/legacy"

    a {
        color: hsv(270, 50%, 100%); // #bf7fff
    }

License
=======

The library is available as open source under the terms of the `MIT License`_.

.. _HSV/HSB: https://en.wikipedia.org/wiki/HSL_and_HSV
.. _node-sass-package-importer: https://www.npmjs.com/package/node-sass-package-importer
.. _MIT License:        https://opensource.org/licenses/MIT

.. |npm|        image:: https://img.shields.io/npm/v/sass-hsv.svg?style=flat-square
   :target:     https://www.npmjs.com/package/sass-hsv
.. |GitHub|     image:: https://img.shields.io/badge/get%20on-GitHub-informational.svg?style=flat-square&logo=github
   :target:     https://github.com/arokettu/sass-hsv
.. |GitLab|     image:: https://img.shields.io/badge/get%20on-GitLab-informational.svg?style=flat-square&logo=gitlab
   :target:     https://gitlab.com/sandfox/sass-hsv
.. |Bitbucket|  image:: https://img.shields.io/badge/get%20on-Bitbucket-informational.svg?style=flat-square&logo=bitbucket
   :target:     https://bitbucket.org/sandfox/sass-hsv
.. |Gitea|      image:: https://img.shields.io/badge/get%20on-Gitea-informational.svg?style=flat-square&logo=gitea
   :target:     https://sandfox.org/sandfox/sass-hsv
