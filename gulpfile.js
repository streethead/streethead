var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync');

var config = {
    styles: {
        src: "src/assets/sass/*.scss",
        dist: ".temp/assets/css"
    },
    templates: {
        src: "src/*.html"
    },
    src: "src",
    temp: ".temp"
};

gulp.task('styles', function(){
    return gulp.src(config.styles.src)
        .pipe(plugins.plumber())
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.sass.sync({
            outputStyle: 'expanded',
            precision: 10,
            includePaths: ['.']
        }).on('error', plugins.sass.logError))
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest(config.styles.dist))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', ['styles'], function(){
    browserSync({
        notify: false,
        server: {
            baseDir: [config.src, config.temp],
            routes: {
                '/node_modules': 'node_modules'
            }
        }
    });

    gulp.watch(config.styles.src, ['styles']);
    gulp.watch(config.templates.src).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);