'use strict';


var fileInclude = require('gulp-file-include');
var config      = require('./config');

module.exports = function(gulp) {

  gulp.task('html', function() {
    return gulp.src(config.source.html)
      .pipe(fileInclude())
      .pipe(gulp.dest(config.dest.html));
  });

};
