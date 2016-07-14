var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var cssnano = require('cssnano');
var rucksack = require('gulp-rucksack');
var livereload = require('gulp-livereload');

gulp.task('less', function () {
	var processors = [
	autoprefixer({browsers : ['last 2 version']}),
	cssnano(),
  ];
  return gulp.src('css/components.less')
   .pipe(less())
   .pipe(postcss(processors))
   .pipe(rucksack())
   .pipe(gulp.dest('dist'))
   .pipe(livereload());
});

gulp.task('watch', function(){
	livereload.listen();
  gulp.watch('css/components/*.less', ['less']);
});

gulp.task('default',  ['less', 'watch']);