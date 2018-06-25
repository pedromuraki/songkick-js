const gulp = require('gulp');
const browsersync = require('browser-sync').create();

/* browsersync */
gulp.task('bs', function() {
  browsersync.init({
    server: "./"
  });
  gulp.watch('*.html').on('change', browsersync.reload);
  gulp.watch('src/js/bundle/bundle.js').on('change', browsersync.reload);
});
