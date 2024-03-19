#!/usr/bin/env bash
test -e "./dist" && rm -r "./dist"
yarn build:js
./node_modules/.bin/sass --style=compressed "./environment_indicator_loft.scss" "./dist/environment_indicator_loft.css"
