var gulp = require('gulp');
var scss = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'app'
        }
    });
})

gulp.task('compile', function () {
    gulp.src('app/scss/**/*.scss')
        .pipe(scss()).on('error', function (error) {
            console.log(error.message);
        })
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch', ['compile', 'browser-sync'], function () {
    gulp.watch('app/scss/**/*.scss', ['compile']);
    gulp.watch('app/*.html', browserSync.reload);
});