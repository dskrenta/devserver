'use strict';
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const gutil = require("gulp-util");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack.config.js");
const stream = require('webpack-stream');

const path = {
    HTML: 'src/index.html',
    ALL: ['src/**/*.jsx', 'src/**/*.js'],
    MINIFIED_OUT: 'build.min.js',
    DEST_SRC: 'dist/src',
    DEST_BUILD: 'dist/build',
    DEST: 'dist'
};

gulp.task('webpack', [], function() {
    return gulp.src(path.ALL)
        .pipe(sourcemaps.init())
        .pipe(stream(webpackConfig))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task("webpack-dev-server", function(callback) {
    // modify some webpack config options
    let myConfig = Object.create(webpackConfig);
    myConfig.devtool = "eval";
    myConfig.debug = true;

    // Start a webpack-dev-server
    new WebpackDevServer(webpack(myConfig)).listen(8080, "localhost", function(err) {
        if (err) throw new gutil.PluginError("webpack-dev-server", err);
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
    });
});

gulp.task('watch', function() {
    gulp.watch(path.ALL, ['webpack']);
});

gulp.task('default', ['webpack-dev-server', 'watch']);
