'use strict';

var config = require('./config');
var del = require('del');
var vinylPaths = require('vinyl-paths');

module.exports = function(gulp) {

  gulp.task('clean', function() {
    return gulp.src(config.build)
      .pipe(vinylPaths(del));
  });

};
