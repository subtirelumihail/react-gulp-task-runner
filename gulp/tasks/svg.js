'use strict';

var changed   = require('gulp-changed');
var svgSprite = require('gulp-svg-sprite');

var config  = require('./config');

module.exports = function(gulp) {
  gulp.task('svg', function () {
    return gulp.src(config.source.svg)
      .pipe(changed(config.dest.svg)) // Ignore unchanged files
      .pipe(svgSprite({
        mode: 'symbols',
        prefix: 'sym-%f'
      }))
    .pipe(gulp.dest(config.dest.svg));
  });

};
