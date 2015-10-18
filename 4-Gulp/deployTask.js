
// Dependencies
var config          = require('./config').ftpSettings;
var gulp            = require('gulp');
var ftp             = require('vinyl-ftp');
var ignore          = require('gulp-ignore');
var gutil           = require('gulp-util');

// Deploy online via FTP
gulp.task( 'deploy', function() {

	var conn = ftp.create({
		host: config.ftpHostName,
		user: config.ftpUserName,
		password: config.ftpPassword,
		port: config.ftpPort,
		parallel: config.ftpParallelStreams,
		log: gutil.log
	});

	return gulp.src( config.ftpInput, { base: '.', buffer: false } )
		.pipe ( conn.differentSize( config.ftpRemoteDirectory ) )
		.pipe ( conn.newer( config.ftpRemoteDirectory ) )
		.pipe ( conn.dest( config.ftpRemoteDirectory ) );

});