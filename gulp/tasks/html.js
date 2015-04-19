'use strict';

var config = require('./config');

module.exports = function(gulp) {

  gulp.task('html', function() {
    return gulp.src(config.source.html)
      .pipe(gulp.dest(config.dest.html));
  });

};
