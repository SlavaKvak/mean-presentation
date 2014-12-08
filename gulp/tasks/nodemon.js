'use strict'

var gulp = require('gulp')
  , nodemon = require('gulp-nodemon')
  , jshint = require('gulp-jshint')

gulp.task('lint', function () {
  gulp.src('./**/*.js')
    .pipe(jshint())
})

gulp.task('nodemon', function () {
  nodemon({ script: 'server.js', ext: 'jade js', ignore: ['bundle.js'], nodeArgs: ['--debug']})
  	.on('start', ['browserify'])
    .on('change', ['lint', 'browserify'])
    .on('restart', function () {
      console.log('restarted!')
    })
})