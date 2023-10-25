#!/usr/bin/env bash
test -e "./css" && rm -r "./css"
yarn
./node_modules/.bin/sass --style=compressed "./environment_indicator.scss" "./css/environment_indicator.css"
