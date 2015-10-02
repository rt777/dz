var gulp = require("gulp"),
browserSync = require('browser-sync');
gulp.task('server', function () {
browserSync({
	port: 9000,
	server: {
		baseDrr: 'app'
	}
});

});
gulp.task('watch', function () {
	gulp.watch ([
		'app/*.html',
		'app/*/main.css',
		'app/js/**/*.js',
		'app/css/**/*.css'
		]).on('change', browserSync.reload);
			});
gulp.task('default', ['server', 'watch']);