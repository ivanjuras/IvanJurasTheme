
// Dependencies
var config          = require('./config').paths.sass;
var autoprefixer    = require('gulp-autoprefixer');
var gulp            = require('gulp');
var handleErrors    = require('./handleErrors').handleErrors;
var sass            = require('gulp-sass');
var browserSync     = require('browser-sync');

// CSS tasks
gulp.task( 'styles', function() {

	return gulp.src( config.input )
		.pipe( sass() ).on( 'error', handleErrors )
		.pipe( autoprefixer ({
			browsers:[ config.prefixVersion ]
		}))
		.pipe( gulp.dest( config.output ) )
		.pipe( browserSync.reload({stream:true}) );

});