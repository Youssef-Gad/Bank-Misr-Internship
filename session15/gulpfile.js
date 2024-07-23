const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("./scss/*.scss", { allowEmpty: true })
    .pipe(sass())
    .pipe(dest("css"));
}

function watchFiles() {
  watch(["./scss/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchFiles);
