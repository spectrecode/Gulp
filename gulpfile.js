var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserslist= require('browserslist');
var autoprefixer= require('gulp-autoprefixer');
var pug         = require('gulp-pug');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var rename      = require("gulp-rename");
var browserSync = require('browser-sync').create();

sass.compiler   = require('node-sass');

gulp.task('sass', function(){
    return gulp.src('./source/sass/*.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream())
});

gulp.task('pug', function(){
    return gulp.src('./source/layouts/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./dist'))
})

gulp.task('javascript', function(){
    return gulp.src('./source/javascript/*.js')
        .pipe(uglify())
        .pipe(rename('app.js'))
        .pipe(gulp.dest('dist/js/'))
        .pipe(browserSync.stream())
})

gulp.task('fonts', function(){
    return gulp.src('./source/fonts/*.{eot,svg,ttf,woff}')
        .pipe(gulp.dest('dist/fonts/'))
        .pipe(browserSync.stream())
})

gulp.task('default', function(){
    gulp.watch('source/sass/**/*.scss', gulp.series('sass'));
    gulp.watch('source/layouts/**/*.pug', gulp.series('pug'));
    gulp.watch('source/javascript/**/*.js', gulp.series('javascript'));
    gulp.watch('source/fonts/**/*.{eot,svg,ttf,woff}', gulp.series('fonts'));
    gulp.watch('dist/**/*.html').on('change', browserSync.reload)
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
})