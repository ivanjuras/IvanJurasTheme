
// Dependencies
var config          = require('./config').paths.js;
var gulp            = require('gulp');
var jshint          = require('gulp-jshint');
var concat          = require('gulp-concat');
var stylish         = require('jshint-stylish');
var sourcemaps      = require('gulp-sourcemaps');
var order           = require('gulp-order');
var browserSync     = require('browser-sync');

// JavaScript tasks
gulp.task( 'scripts', function() {

	return gulp.src( config.input )
		.pipe( jshint() )
		.pipe( jshint.reporter( stylish ) )
		.pipe( jshint.reporter('fail') ).on( 'error', function () {
			this.emit('end')
		})
		.pipe( order([
			config.vendorInput,
			config.coreInput
		], { base: './' } ))
		.pipe( concat('script.js') )
		.pipe( gulp.dest( config.output ) )
		.pipe( browserSync.reload( { stream:true } ) );

});