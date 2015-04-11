'use strict';

var autoprefixer = require('gulp-autoprefixer');
var config = require('./config');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

module.exports = function(gulp) {
  gulp.task('sass', function() {
    return gulp.src(config.source.sass)
      .pipe(sass({
        sourcemapPath: './',
        bundleExec: true,
        style: 'compressed'
      }))
      .on('error', function(err) {
        console.log(err.message);
      })
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(autoprefixer('last 2 versions', '> 2%'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(config.dest.css));
  });
};
