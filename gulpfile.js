
// define all the things
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var shell = require('gulp-shell');
var files = ['**/*.html', '**/*.md', '**/*.markdown', '**/*.js', '**/*.scss', '!build/**/*.*'];

// build Jekyll, only the stuff that's changed (documentation calls this incremental mode) experimental
gulp.task('build', shell.task([
  'jekyll build --incremental '
]))
// setup browsersync to reload browser when changes happen
gulp.task('sync-setup', function() {
    browserSync.init({
        proxy: "http://dai.dev",
        notify: false,
    });
});
// look for changes to _source_ files, then trigger a new incremental build and reload the browser
gulp.task('watch', function(){
  gulp.watch(files, ['build', reload]);
})
// the default task to call from the terminal: `gulp`
gulp.task('default', ['build', 'sync-setup', 'watch']);
