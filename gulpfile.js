// define all the things
var gulp        = require('gulp');
var bs          = require('browser-sync');
// use this bit of middleware for connect server to clean up urls
var hygienist   = require('hygienist-middleware');
var reload      = bs.reload;
var shell       = require('gulp-shell');
var uglify      = require('gulp-uglify');
// exclude rendered files to avoid duplicate hits to the watch process
var files = ['**/*.html', '**/*.md', '**/*.markdown', '**/*.js', '**/*.scss', '!build/**/*.*'];
gulp.task('build', shell.task([
  'bundle exec jekyll build'
]))
// setup browsersync to reload browser when changes happen
gulp.task('serve', function() {
    bs({
        server:{
          baseDir: "build",
          middleware: hygienist("build")
        },
        notify: false,
    });
});
// compress javascript assets
gulp.task('compress', function(){
  return gulp.src('build/assets/js/site.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/assets/js'))
});
// look for changes to **source files**, then trigger a new incremental build and reload the browser
gulp.task('watch', function(){
  gulp.watch(files, ['build', reload]);
})
// the default task to call from the terminal: `gulp`
gulp.task('default', ['build', 'serve', 'watch']);

// grab new content from the pubs and digital sites
gulp.task('aggregate', shell.task([
  'curl http://dai-global-developments.com/pubs.yml --output _data/pubs.yml && curl http://dai-global-digital.com/digital.yml --output _data/digital.yml'
]))
