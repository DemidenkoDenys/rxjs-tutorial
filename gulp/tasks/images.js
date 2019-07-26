module.exports = ({gulp, imagemin, config, imageminMozjpeg, newer}) => {
    gulp.task('images', () => {
        return gulp.src(config.images.src)
                   .pipe(newer(config.images.dest))
                   .pipe(imagemin([
                       imagemin.gifsicle({interlaced: true}),
                       imagemin.jpegtran({progressive: true, arithmetic: true}),
                       imagemin.optipng({optimizationLevel: 7}),
                       imageminMozjpeg({
                           quality: 80,
                           progressive: true
                       })
                   ]))             
                   .pipe(gulp.dest(config.images.dest))
    })
};
