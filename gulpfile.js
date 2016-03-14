"use strict"

const gulp = require("gulp")
    , jade = require("gulp-jade")
    , less = require("gulp-less")
    , postcss = require("gulp-postcss")

gulp.task("jade", () =>

    gulp.src("*.jade")
        .pipe(jade())
        .pipe(gulp.dest("./"))
)

gulp.task("less", () =>

    gulp.src("*.less")
        .pipe(less())
        .pipe(gulp.dest("./less/"))
)

gulp.task("postcss", () =>
{
    let processors = [ "cssnext", "autoprefixer" ]
        .map(name => require(name)())

    return gulp.src("*.css")
        .pipe(postcss(processors))
        .pipe(gulp.dest("./post/"))
})

gulp.task("watch", () =>
{
    gulp.watch("*.less", [ "less" ])
    gulp.watch("*.css", [ "postcss" ])
    gulp.watch("*.jade", [ "jade" ])
})

gulp.task("default", [ "watch" ])