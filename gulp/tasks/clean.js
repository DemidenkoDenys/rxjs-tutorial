module.exports = ({gulp, del, config}) => {
    gulp.task('clean', () => {
        config.isDev = false;
        return del([config.dist]);
    });
};