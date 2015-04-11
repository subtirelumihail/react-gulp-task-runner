'use strict';

var config = require('./config');
var jshint = require('gulp-jshint');
var react = require('gulp-react');
var cache = require('gulp-cached');

module.exports = function(gulp) {

  gulp.task('jshint', function() {
    var stream = gulp.src(config.source.jshint)
      .pipe(cache('jshint'))
      .pipe(react())
      .on('error', function(err) {
        console.error('JSX ERROR in ' + err.fileName);
        console.error(err.message);
        this.end();
      })
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'));
   
    if (process.env.CI) {
      stream = stream.pipe(jshint.reporter('fail'));
    }
   
    return stream;
  });

};
