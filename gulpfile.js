
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var shell = require('gulp-shell')

gulp.task('build', shell.task([
  'jekyll build --incremental --watch'
]))

gulp.task('sync', function() {
    browserSync.init({
        proxy: "http://dai.dev",
        notify: false,
        reloadDelay: 1000
    });
    gulp.watch("build/**/*.html").on("change", reload);
    gulp.watch("build/**/*.css").on("change", reload);
    gulp.watch("build/**/*.js").on("change", reload);

});

gulp.task('default', ['build', 'sync']);
