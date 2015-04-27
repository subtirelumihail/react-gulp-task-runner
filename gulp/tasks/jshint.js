'use strict';

var config = require('./config');
var jshint = require('gulp-jshint');

var handleError = require('../util/handleErrors');

module.exports = function(gulp) {

  gulp.task('jshint', function() {
    var stream = gulp.src(config.source.jshint)
      .on('error', handleError)
      .pipe(jshint({ linter: require('jshint-jsx').JSXHINT }))
      .pipe(jshint.reporter('jshint-stylish'));
   
    if (process.env.CI) {
      stream = stream.pipe(jshint.reporter('fail'));
    }
   
    return stream;
  });

};
