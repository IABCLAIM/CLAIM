
var gulp = require('gulp');
var concat = require('gulp-concat');

var dist = 'public/dist'

gulp.task('css', function () {
   gulp.src([
        'node_modules/font-awesome/css/font-awesome.css',
        'node_modules/bulma/css/bulma.css',
        'node_modules/toastr/build/toastr.css',
        'src/css/*.css'
    ])
   .pipe(concat('style.css'))
   .pipe(gulp.dest(dist + '/css'))
});

gulp.task('assets', function() {
    gulp.src([
        'src/assets/*'
    ]).pipe(gulp.dest('public/dist/assets'));
});

gulp.task('default', ['css', 'assets']);
