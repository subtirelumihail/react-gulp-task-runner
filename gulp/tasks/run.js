'use strict';

var browserSync = require('browser-sync');
var config = require('./config');

var server = {
  start: function() {
    browserSync({
      server: { baseDir: './' + config.build + '/' },
      open: false
     });
  }
};

module.exports = function(gulp, argv) {

  gulp.task('default', [
    'browserify',
    'sass',
    'img',
    //'jshint',
    'fonts',
    'html'
  ], function() {
    if (argv.target !== 'production'){
      server.start();
      gulp.start('watch');
    }
  });

};
