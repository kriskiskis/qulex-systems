'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require("gulp-postcss");
var autoprefixer = require('autoprefixer');

gulp.task('style', function() {
  gulp.src('./styles/sass/style.scss')
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('styles/css'))
});
