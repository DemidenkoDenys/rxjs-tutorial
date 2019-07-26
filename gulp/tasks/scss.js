module.exports = ({gulp, sass, sourcemaps, csso, postcss, autoprefixer, config, rename, bs}) => {
    gulp.task('scss', () => {
        const scss = gulp.src(config.styles.src)
                         .pipe(sourcemaps.init())
                         .pipe(sass().on('error', sass.logError))
                         .pipe(postcss([autoprefixer({
                             browsers: ["last 2 version"]
                         })]));

        if (!config.isDev) {
            return scss.pipe(csso())
                       .pipe(rename({
                           suffix: '.min'
                       }))
                       .pipe(sourcemaps.write('./'))
                       .pipe(gulp.dest(config.styles.dest))
                       .pipe(bs.stream({match: '**/*.css'}));
        }else{
            return scss.pipe(sourcemaps.write())
                       .pipe(gulp.dest(config.styles.dest))
                       .pipe(bs.stream());
        }
    });
};