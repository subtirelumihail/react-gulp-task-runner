'use strict';

var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var config = require('./config');
var ejs = require('browserify-ejs');
var envify = require('envify/custom');
var gulpIf = require('gulp-if');
var source = require('vinyl-source-stream');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');

module.exports = function(gulp, argv) {

    gulp.task('browserify', function() {
        return browserify({
                entries: [config.appEntry]
            })
            .transform(ejs)
            .transform(envify({
                target: argv.target || 'local'
            }))
            .bundle()
            .pipe(source(config.bundles.js))
            .pipe(buffer())
            .pipe(gulpIf(argv.production, stripDebug()))
            .pipe(gulpIf(argv.production, uglify()))
            .pipe(gulp.dest(config.dest.js));
    });

};
