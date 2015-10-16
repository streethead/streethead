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
        .pipe(plugins.autoprefixer({ browsers: ['last 2 versions'] }))
        .pipe(gulp.dest(config.styles.dist))
        .pipe(browserSync.reload({stream: true}));
});