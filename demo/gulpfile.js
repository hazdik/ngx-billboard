var gulp = require('gulp'),
  clean = require('del');

gulp.task("default", () => {
  clean('../docs/');
  gulp.task('default', function () {
    return gulp.src('dist/**')
      .pipe(gulp.dest('../docs/'));
  });
});
