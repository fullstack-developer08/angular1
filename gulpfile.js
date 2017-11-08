'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var pug = require('gulp-pug');

gulp.task('eslint', function() {
    gulp.src(['**/*.js', '!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});


gulp.task('views', function buildHTML() {
  return gulp.src('*.pug')
  .pipe(pug({
    // Your options in here.
  }))
});