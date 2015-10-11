var gulp = require('gulp');
var ts = require('gulp-typescript');
var rimraf = require('gulp-rimraf');
var nodemon = require('gulp-nodemon');

gulp.task('cleandir',function(){
	return gulp.src('dest').pipe(rimraf());
});

gulp.task('buildserver', function(){
	var tsresult = gulp.src('src/**/*ts').pipe(ts({
		module:'CommonJs'
	}));
	return tsresult.js.pipe(gulp.dest('dest'));
});

gulp.task('nodemon',['buildserver','watch'],function(){
	nodemon({
		script: './dest/app.js'
	}).on('restart',function(){
		console.log('nodemon restart the app.js');
	})
})

gulp.task('watch',function(){
	gulp.watch('src/**/*.ts',['buildserver']);
});

gulp.task('default',['nodemon']);