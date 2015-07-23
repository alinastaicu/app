var gulp = require('gulp');
var browserSync = require('browser-sync');

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

gulp.task('watch', ['serve'], function () {
	gulp.watch(['src/**'], ['reload']);
});  

gulp.task('serve', function () {
	startBrowserSync(['src'], []);
});

gulp.task('default', ['watch'], function () { });