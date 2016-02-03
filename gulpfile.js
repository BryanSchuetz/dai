
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var shell = require('gulp-shell')

// build jekyll and let it watch itself for rebuilding
gulp.task('build', shell.task([
  'jekyll build --watch'
]))
// setup browsersync to reload browser when changes happen
gulp.task('sync-setup', function() {
    browserSync.init({
        proxy: "http://dai.dev",
        notify: false,
    });
});
// look for a rebuilt index file when Jekyll changes things up and then reload the browser
gulp.task('watch', function(){
  gulp.watch("build/index.html").on("change", reload);
})
// the default task to call from the terminal 'gulp'
gulp.task('default', ['build', 'sync-setup', 'watch']);
