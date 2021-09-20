const gulp = require("gulp");
const sass = require("gulp-sass");
const cssnano = require("gulp-cssnano");
const del = require("del");
const browserSync = require("browser-sync").create();

gulp.task("styles", async function () {
  return gulp
    .src("scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("temp/css/"))
    .pipe(browserSync.stream());
});

gulp.task("minicss", function () {
  return gulp
    .src("temp/css/*.css")
    .pipe(cssnano())
    .pipe(gulp.dest("public/css"));
});

gulp.task("clean", () => {
  return del(["temp/"]);
});

gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      baseDir: "./public",
    },
  });
});

gulp.task("build", gulp.series("styles", "minicss", "clean"));

gulp.task("watch", function () {
  browserSync.init({
    server: "./public",
  });

  gulp.watch(
    ["scss/**/*.scss", "scss/*.scss", "public/*.html"],
    gulp.series("styles", "minicss", "clean")
  );
  gulp
    .watch(["scss/**/*.scss", "scss/*.scss", "public/*.html"])
    .on("change", browserSync.reload);
});
