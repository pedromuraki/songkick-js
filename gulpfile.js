const gulp = require('gulp');
const browsersync = require('browser-sync').create();

/* browsersync */
gulp.task('bs', function() {
  browsersync.init({
    server: "./examples"
  });
  gulp.watch('*.html').on('change', browsersync.reload);
  gulp.watch('./examples/bundle/app.bundle.js').on('change', browsersync.reload);
});
