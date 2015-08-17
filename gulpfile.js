var gulp = require('gulp');
var path = require('path');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var Server = require('karma').Server;

function startBrowserSync (baseDir, middleware) {
	return browserSync({
		server: {
			baseDir: baseDir,
			middleware: middleware
		},
		startPath: '/',
		browser: 'default'
	});
}

gulp.task('reload', function () {
	browserSync.reload();
});

gulp.task('test', function (done) {
  var options = {
    configFile: path.resolve('karma.conf.js'),
    singleRun: true,
    browsers: ['PhantomJS']
  };

  new Server(options, function(exitStatus){
    done();
  }).start();
});

gulp.task('watch', ['serve'], function () {
	gulp.watch(['src/**'], ['test', 'reload']);
});

gulp.task('serve', function () {
	startBrowserSync(['src'], []);
});

gulp.task('default', ['test', 'watch'], function () { });
