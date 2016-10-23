/**
 * Created by Administrator on 2015/12/25.
 */
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');

gulp.task('clean', function () {
    return gulp.src(['dist/jit/lib.js','dist/jit/aot.js'], {read: false})
        .pipe(clean());
});

gulp.task('jsmin', function () {
    gulp.src(['app/lib/**'])
        .pipe(uglify())
        .pipe(concat('lib.js'))//合并后的文件名
        .pipe(gulp.dest('dist/jit'))
        .pipe(gulp.dest('dist/aot'));
});





gulp.task('default', function (callback) {
    runSequence('clean',
        ['jsmin'],
        callback);
});