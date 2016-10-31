var gulp = require('gulp');
var pug = require('gulp-pug');
var rename = require('gulp-rename');

gulp.task('default', function() {
	return gulp.src('./pugs/*.pug')
		.pipe(pug())
		.pipe(gulp.dest('./htmls'));
	//.pipe(rename(function(path) {
	//	path.extname=".html"
	//}))
});