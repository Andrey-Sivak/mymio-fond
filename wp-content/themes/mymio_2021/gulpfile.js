const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');
const browserSync = require('browser-sync').create();
const webpack = require('webpack-stream');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const replace = require('gulp-replace');

let isDev = false;
let isProd = !isDev;

let webpackConfig = {
    output: {
        filename: '[name].js',
        path: __dirname + '/assets/account-dist',
    },
    entry: {
        lk_forms: './assets/account-src/js/main.js',
        register: './assets/account-src/js/register.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/' //исключения
            }
        ]
    },
    mode: isDev ? 'development' : 'production'
};

function styles() {
    return gulp.src('./assets/account-src/sass/**/*.scss')
        .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(replace('../../', '../'))
        .pipe(gulp.dest('./assets/account-dist/css'));
}

function scripts() {
    return gulp.src('./assets/account-src/js/main.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./assets/account-dist/js'));
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./assets/account-src/sass/**/*.scss', styles);
    gulp.watch('./assets/account-src/js/**/*.js', scripts);
}

function clean() {
    return del(['./assets/account-dist/*']);
}

gulp.task('styles', styles);
gulp.task('watch', watch);

let build = gulp.series(clean,
    gulp.parallel(gulp.series(styles), scripts)
);

gulp.task('build', build);
gulp.task('dev', gulp.series('build', 'watch'));
