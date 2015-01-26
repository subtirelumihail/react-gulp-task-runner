'use strict';

var config = require('./config');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

module.exports = function(gulp) {

  gulp.task('jshint', function() {
    return gulp.src(config.source.jshint)
      .pipe(jshint())
      .pipe(jshint.reporter(stylish));
  });

};
