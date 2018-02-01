var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css');

gulp.task('css', function() {
    gulp.src([
        'node_modules/font-awesome/css/font-awesome.css',
        'node_modules/bulma/css/bulma.css',
        'node_modules/toastr/build/toastr.css',
        'src/css/*.css'
    ]).pipe(minifyCSS())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('public/dist/css'));
});

gulp.task('js', function() {
    gulp.src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/toastr/toastr.js',
        'src/js/*.js'
    ]).pipe(uglify())
    .pipe(concat('script.js'))
    .pipe(gulp.dest('public/dist/js'));
});

gulp.task('assets', function() {
    gulp.src([
        'src/assets/*'
    ]).pipe(gulp.dest('public/dist/assets'));
});

gulp.task('default', function() {
    gulp.run('js', 'css', 'assets');
});