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