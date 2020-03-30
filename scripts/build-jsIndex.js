const gulp = require('gulp')
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

return gulp.src([
    './public/js/index.js',
  ])
  .pipe(concat('index.js'))
  .pipe(gulp.dest('./static/'))