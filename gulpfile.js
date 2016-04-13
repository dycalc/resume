var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('browser-sync', ['sass'], function() {
  browserSync({
    server: {
      baseDir: '.'
    }
  });
});

gulp.task('sass', function() {
  gulp.src('sass/main.scss')
    .pipe(sass()).on('error', handleError)
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({
      stream: true
    }));;
});

gulp.task('watch', function() {
  gulp.watch(['sass/*.scss'], ['sass']);
});

gulp.task('default', ['browser-sync', 'watch']);
