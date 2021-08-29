#!/usr/bin/env bash

cd `dirname $0`

# do clean installations
find . -type d -name node_modules -exec rm -rf {} \;
find . -type f -name package-lock.json -exec rm -f {} \;

cd node-sass-package-importer && \
npm install && node index.js && \
echo "All installation scripts successful"

exit $?
