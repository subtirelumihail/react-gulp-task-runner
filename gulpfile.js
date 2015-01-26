'use strict';

var argv = require('yargs').argv;
var requireDir = require('require-dir');
var dir = requireDir('./tasks');
var gulp = require('gulp');

require('pretty-error').start();

for (var key in dir) {
  if (dir.hasOwnProperty(key) && key !== 'config') {
    dir[key](gulp, argv);
  }
}
