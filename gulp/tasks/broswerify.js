'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var browserifyShim = require('browserify-shim');

/*var browserify = require('gulp-browserify');
var concat = require('gulp-concat');*/

module.exports = gulp.task('browserify', function () {
  return browserify({
      entries: ['./public/app/app.js'],
      debug:true
    })
    .transform(browserifyShim)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/dist/js/'));
});

// Browserify task
/*module.exports = gulp.task('browserify', function() {
    // Single point of entry (make sure not to src ALL your files, 
    // browserify will figure it out for you)
    return gulp.src(['./public/app/app.js'])
        .pipe(browserify({
            insertGlobals: true,
            debug: true
        }))
        // Bundle to a single file
        .pipe(concat('bundle.js'))
        // Output it to our dist folder
        .pipe(gulp.dest('./dist/js/'));
});*/