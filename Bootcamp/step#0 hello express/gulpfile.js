var gulp = require('gulp');
var gulp_typescript = require('gulp-typescript');
var rimraf = require('gulp-rimraf'); 
var nodemon = require('gulp-nodemon');


gulp.task('cleandir', function(){
  return gulp.src('dest').pipe(rimraf());
}); 
 
gulp.task('buildapp', ['cleandir'],  function () {
  var tsResult = gulp.src('source/**/*.ts')
    .pipe(gulp_typescript({
        module: 'CommonJS'
      }));
  return tsResult.js.pipe(gulp.dest('dest/'));
});


gulp.task('nodemon', ['buildapp', 'watch'], function(){
    nodemon({
        script: './dest/app.js'
    }).on('restart', function(){
        console.log('nodemon restarted app.js');
    })
})

gulp.task('watch', function() {
  gulp.watch('source/**/*.ts', ['buildapp']);
});

gulp.task('default', ['buildapp']); 