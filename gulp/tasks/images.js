'use strict';

var changed   = require('gulp-changed');
var config    = require('./config');
var gulpIf    = require('gulp-if');
var imagemin  = require('gulp-imagemin');

module.exports = function(gulp, argv) {

  gulp.task('img', ['svg'], function() {
    return gulp.src(config.source.img)
      .pipe(changed(config.dest.img))
      .pipe(gulpIf(argv.target === 'production', imagemin()))
      .pipe(gulp.dest(config.dest.img));
  });

};
