// Load plugins
var gulp			= require('gulp'),
	sass			= require('gulp-ruby-sass');


// Process sass files
gulp.task('styles', function() {
	return sass( __dirname + '/sass/**/*.scss' )
		.on('error', sass.logError)
		.pipe( gulp.dest( __dirname + '/wordpress/wp-content/themes/wcus' ) );
});

// Watch task
gulp.task('watch', function() {
	gulp.watch( __dirname + '/sass/**/*.scss', ['styles'] );
});

// Default task
gulp.task('default', [ 'styles' ]);
