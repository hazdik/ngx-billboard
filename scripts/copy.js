var gulp = require('gulp'),
  clean = require('del');

gulp.task("default", () => {
  clean('docs/',  {force: true});
  gulp.task('default', function () {
    return gulp.src('demo/dist/**')
      .pipe(gulp.dest('docs/'));
  });
});


