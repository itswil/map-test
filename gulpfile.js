var gulp = require('gulp');
var rimraf = require('rimraf');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var sass = require('gulp-sass');
var concat = require('gulp-concat');

var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');


gulp.task('rmrf', function() {
    rimraf.sync('./build');
});

gulp.task('css', function() {
    return gulp.src([
        './static/css/styles.scss',
    ])
        .pipe(sass({ outputStyle: 'compressed' }))
        // .on('error', function(error) { console.error(error); })
        .pipe(gulp.dest('./build'))
        .pipe(reload({ stream: true }));
});

// gulp.task('js', function() {
//     return gulp.src([
//         './static/js/*.js',
//     ])
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'))
//         .pipe(uglify())
//         .pipe(concat('js.js'))
//         .pipe(gulp.dest('./build'))
//         .pipe(reload({ stream:true }));
// });

gulp.task('js', function() {
    return gulp.src([
      './static/js/*.js',
    ])
      .pipe(concat('js.js'))
      .pipe(gulp.dest('./build'));

});


// gulp.task('default', ['rmrf', 'css', 'js']);
gulp.task('default', ['css', 'js']);

gulp.task('watch', function() {
    gulp.start('default');

    browserSync({
        server: {
            baseDir: "./"
        },
        open: false
    });

    gulp.watch('./static/css/**/*.*', ['css']);
    gulp.watch('./static/js/**/*.*', ['js']);
    gulp.watch('**/*.html').on('change', reload);
});
