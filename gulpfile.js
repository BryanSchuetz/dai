var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var shell = require('gulp-shell')

gulp.task('build', shell.task([
  'jekyll build --watch'
]))

gulp.task('sync', function() {
    browserSync.init({
        proxy: "http://dai.dev",
        notify: false
    });
    gulp.watch("build/index.html").on("change", reload);
});

gulp.task('default', ['build', 'sync']);
