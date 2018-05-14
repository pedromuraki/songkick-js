const gulp = require('gulp');
const browsersync = require('browser-sync').create();
// const runsequence = require('run-sequence');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
/* css */
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
// const concatcss = require('gulp-concat-css');
const groupmediaqueries = require('gulp-group-css-media-queries');
const cleancss = require('gulp-clean-css');
/* js */
// const concatjs = require('gulp-concat');
const uglify = require('gulp-uglify');
/* img */
const imagemin = require('gulp-imagemin');
const imageminpngquant = require('imagemin-pngquant');

/* browsersync */
gulp.task('bs', function() {
  browsersync.init({
    server: "./"
  });
  gulp.watch('src/scss/*.scss', ['sass', browsersync.reload]);
  gulp.watch('*.html').on('change', browsersync.reload);
  gulp.watch('src/js/bundle/app.bundle.js').on('change', browsersync.reload);
});

/* css */
/* autoprefixer */
const autoprefixerOptions = {
  browsers: ['last 2 versions']
};
/* sass */
gulp.task('sass', function() {
  return gulp.src('src/scss/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('src/css'))
});
/* group media queries & minify */
gulp.task('css', function() {
  return gulp.src('src/css/styles.css')
    // .pipe(concatcss(''))
    .pipe(groupmediaqueries())
    .pipe(cleancss())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('dist/css'));
});
/* runsequence */
// gulp.task('css', function() {
//   runsequence(
//     'sass',
//     'compilecss'
//   );
// });

/* javascript */
/* uglify */
gulp.task('uglify', function() {
  return gulp.src('src/js/bundle/app.bundle.js')
    .pipe(uglify())
    .pipe(rename('app.bundle.min.js'))
    .pipe(gulp.dest('src/js/bundle'));
});
/* concatenate */
// gulp.task('concatjs', function() {
//   return gulp.src([
//     'src/js/TweenLite.min.js',
//     'src/js/TimelineLite.min.js',
//     'src/js/EasePack.min.js',
//     'src/js/CSSPlugin.min.js',
//     'src/js/ScrollMagic.min.js',
//     'src/js/animation.gsap.min.js',
//     'src/js/enquire.min.js',
//     'src/js/smooth-scroll.polyfills.min.js',
//     'src/js/bundle/app.bundle.min.js'
//     ])
//     .pipe(sourcemaps.init())
//     .pipe(concatjs('main.min.js'))
//     .pipe(sourcemaps.write('.'))
//     .pipe(gulp.dest('dist/js'));
// });
/* runsequence */
// gulp.task('js', function() {
//   runsequence(
//     'uglify',
//     'concatjs'
//   );
// });

/* images */
gulp.task('img', () =>
	gulp.src('src/img/*')
    .pipe(imagemin([
      imageminpngquant(),
      imagemin.jpegtran(),
      imagemin.gifsicle()
    ],
      {verbose: true}
    ))
		.pipe(gulp.dest('dist/img'))
);
