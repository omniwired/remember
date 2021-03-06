var gulp = require('gulp'),
    ngHtml2Js = require("gulp-ng-html2js"),
    tasks = [
        'browserify',
        'browserify_tests',
        'sass',
        'bower',
        'watch',
        'watch_tests',
        'lint',
        'nodemon'
    ];

gulp.src("./client/partials/*.html")
    .pipe(ngHtml2Js({
        moduleName: "templates",
        prefix: "/partials"
    }))
    .pipe(gulp.dest(".dist/partials"));

// Dynamically load defined tasks from their respective files
tasks.forEach(function(name) {
    gulp.task(name, require('./gulp/tasks/' + name));
});

gulp.task('build', ['browserify', 'sass', 'lint', 'bower']);
gulp.task('test', ['browserify_tests', 'watch_tests', 'nodemon']);
gulp.task('default', ['browserify', 'sass', 'watch', 'nodemon']);
