var gulp 			= require('gulp');
var concat 			= require('gulp-concat');
var uglify 			= require('gulp-uglify');
var imagemin 		= require('gulp-imagemin');
// var del 			= require('del');
var sourcemaps 		= require('gulp-sourcemaps');
var minifyCss 		= require('gulp-minify-css');

var paths = {

  librerias : ["bower_components/angular/angular.min.js",
  			       "bower_components/angular-route/angular-route.min.js",
               "bower_components/jquery/dist/jquery.min.js",
               "bower_components/bootstrap/dist/js/bootstrap.min.js",
               "bower_components/metisMenu/dist/metisMenu.min.js",
               "bower_components/ng-table/dist/ng-table.js",
               "bower_components/angular-aria/angular-aria.js",
               "bower_components/angular-animate/angular-animate.js",
               "bower_components/angular-material/angular-material.js"],

  js: ["js/**/*.js",
  	   "js/*.js"],

  css: ["bower_components/bootstrap/dist/css/bootstrap.min.css",
        "bower_components/metisMenu/dist/metisMenu.min.css",
        "bower_components/morrisjs/morris.css",
        "bower_components/font-awesome/css/font-awesome.min.css",
        "less/sb-admin-2.css",
        "less/timeline.css",
        "less/utilidades.css",
        "bower_components/ng-table/dist/ng-table.min.css",
        "bower_components/angular-material/angular-material.css"]
};

gulp.task('librerias', function() {
	gulp.src(paths.librerias)
		.pipe(uglify())
		.pipe(concat('librerias.min.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('min'));
});


gulp.task('js', function() {
	gulp.src(paths.js)
		.pipe(uglify())
		.pipe(concat('app.min.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('min'));
});

gulp.task('css', function() {
   gulp.src(paths.css)
    .pipe(sourcemaps.init())
    .pipe(concat('css.min.css'))    
    .pipe(minifyCss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('min'));
});


// The default task (called when you run `gulp` from cli) 
gulp.task('default', ['librerias','js', 'css']);