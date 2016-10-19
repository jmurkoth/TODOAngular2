
var gulp= require("gulp");
var tslint = require("gulp-tslint");
var app = './app';
// path to the angularjs core app
var paths = {
    app: app,
};
var files = {
    apptsFiles: [
            paths.app + '/**/*.ts'
    ]
};
 gulp.task("lint", () =>
    gulp.src(files.apptsFiles)
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report())
);

gulp.task('watch', function () {
    gulp.watch(files.apptsFiles, ['lint'])
});
