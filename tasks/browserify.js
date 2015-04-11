'use strict';

var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var config = require('./config');
var reactify = require('reactify');
var envify = require('envify/custom');
var gulpIf = require('gulp-if');
var source = require('vinyl-source-stream');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var chalk = require('chalk');

module.exports = function(gulp, argv) {
  gulp.task('browserify', function() {
    return browserify({
        entries: [config.appEntry]
      })
      .transform(reactify)
      .transform(envify({
          target: argv.target || 'local'
      }))
      .bundle()
      .on('error', function(err){
        // print the error (can replace with gulp-util)
        console.log(chalk.red(err.message));
        // end this stream
        this.emit('end');
      })
      .pipe(source(config.bundles.js))
      .pipe(buffer())
      .pipe(gulpIf(argv.production, stripDebug()))
      .pipe(gulpIf(argv.production, uglify()))
      .pipe(gulp.dest(config.dest.js));
  });
};
