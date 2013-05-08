#!/bin/bash

BASE_DIR=`dirname $0`

echo ""
echo "Starting Karma Server - To run Unit Tests"
echo "-------------------------------------------------------------------"

karma start $BASE_DIR/tests/config/karma.unit-test.conf.js $*
