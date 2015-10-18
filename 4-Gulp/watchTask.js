
// Dependencies
var config          = require('./config'),
	gulp            = require('gulp'),
	browserSync     = require('browser-sync');

// Watch task
gulp.task( 'watch', ['styles', 'scripts'], function() {

	browserSync.init({
		proxy: config.paths.browsersync.localUrl,
		notify: false
	});

	gulp.watch( config.paths.sass.input, ['styles'] );
	gulp.watch( config.paths.js.input, ['scripts'] );

});