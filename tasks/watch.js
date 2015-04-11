'use strict';

var browserSync = require('browser-sync');
var config = require('./config');

module.exports = function(gulp) {

  gulp.task('watch', function() {
    gulp.watch(config.source.html, [
      'html',
      browserSync.reload
    ]);
    gulp.watch(config.source.img, [
      'img',
      browserSync.reload
    ]);
    gulp.watch(config.source.sass, [
      'sass',
      browserSync.reload
    ]);
    // gulp.watch(config.source.font, [
    //   'fonts',
    //   browserSync.reload
    // ]);
    // gulp.watch(config.source.js, [
    //   'jshint',
    //   browserSync.reload
    // ]);
    gulp.watch(config.source.browserify, [
      'browserify',
      browserSync.reload
    ]);
  });

};
