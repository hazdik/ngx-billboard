var gulp = require('gulp'),
  clean = require('del');

gulp.task("default", () => {
  clean('gh-pages/');
  gulp.task('default', function () {
    return gulp.src('dist/**')
      .pipe(gulp.dest('gh-pages/'));
  });
});
