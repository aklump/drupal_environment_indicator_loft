#!/usr/bin/env bash
# https://www.npmjs.com/package/node-sass-chokidar
sass=./node_modules/.bin/node-sass-chokidar

# config
style=compressed
# endconfig

test -e "$7/css" && rm -r "$7/css"
$sass --output-style=${style} "$7/environment_indicator.scss" -o "$7/css"
