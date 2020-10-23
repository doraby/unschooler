"use strict";

const config = require("./gulp-config-local");
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const spritesmith = require('gulp.spritesmith');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const svgmin = require('gulp-svgmin');


/**
 * sprite
 */
gulp.task('sprite', function () {
    var spriteData = gulp.src(config.sprite.rootSprite).pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: '_sprite.scss',
        padding: 5,
        cssTemplate: 'handlebarsStr.css.handlebars'
    }));

    spriteData.img.pipe(gulp.dest(config.sprite.imagesSprite));
    spriteData.css.pipe(gulp.dest(config.sprite.cssSprite));
});

/**
 * images
 */
gulp.task('images:min', function() {
    return gulp.src(config.imagesMin.src)
        .pipe(imagemin({
            progressive: true,
            multipass: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(config.imagesMin.dest));
});

gulp.task('images:test', function() {
    return gulp.src(config.imagesMin.srcTest)
        .pipe(imagemin({
            progressive: true,
            multipass: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(config.imagesMin.destTest));
});

/**
 * svg
 */
gulp.task('svg:min', function() {
    return gulp.src(config.svg.src)
        .pipe(svgmin())
        .pipe(gulp.dest(config.svg.dest));
});

/**
 * sass
 */
gulp.task('sass', function () {
    gulp.src(config.sass.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([ autoprefixer({ browsers: ['last 100 version'] }) ]))
        .pipe(gulp.dest(config.sass.dest))
        .pipe(browserSync.reload({stream: true}));
});

/**
 * browser-sync
 */
gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: {
            target: config.localServer
        },
        port: 3000,
        open: false,
        ghostMode: {
            scroll: false,
            click: false
        }
    });
});

/**
 * watch
 */
gulp.task('watch', function() {
    gulp.watch(config.templatesPath).on('change', browserSync.reload);
    gulp.watch(config.sass.watch, ['sass']);
    gulp.watch(config.sprite.rootSprite, ['sprite']);
});

/**
 * default
 */
gulp.task('default', ['browser-sync', 'sass', 'watch', 'sprite']);

/**
 * build
 */
gulp.task('build', ['sass', 'sprite', 'svg:min', 'images:min']);
