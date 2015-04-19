'use strict';

var gulp       = require('gulp');
var argv       = require('yargs').argv;
var requireDir = require('require-dir');
var dir        = requireDir('./gulp/tasks');

require('pretty-error').start();

for (var key in dir) {
  if (dir.hasOwnProperty(key) && key !== 'config') {
    dir[key](gulp, argv);
  }
}
