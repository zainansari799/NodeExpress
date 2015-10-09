var gulp = require('gulp');
var ts = require('gulp-typescript');
var nodemon = require('gulp-nodemon');
var rimraf = require('gulp-rimraf');

gulp.task('cleandestdir',function(){
	return gulp.src('dest').pipe(rimraf());
});

gulp.task('buildserver',['cleandestdir'],function(){
	var tsResult = gulp.src('src/**/*.ts').pipe(ts({
		module: 'CommonJs'
	}));
	return tsResult.js.pipe(gulp.dest('dest/'));
});

gulp.task('nodemon',['buildserver','watch'], function(){
	nodemon({
		script: './dest/app.js'
	}).on('restart', function(){
		console.log('nodemon restarted app.js');
	})
})

gulp.task('watch',function(){
	gulp.watch('src/**/*.ts',['buildserver']);
});

gulp.task('default',['nodemon']);