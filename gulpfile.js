/**
 * module dependencies
 */
const join = require('path').join;
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
// 压缩css
const cleanCSS = require('gulp-clean-css');
// 删除文件
const del = require('del');
const chalk = require('chalk');
const log = console.log;

// gulp配置
const config = {
    baseDir: 'src/www/bower_components/',
    destDir: 'src/www/styles',
    renameDir: 'www/styles'
};
// 获取命令行参数
const argv = require('minimist')(process.argv.slice(2));

// 压缩css文件
gulp.task('minify:css',()=>{
    const filePath = join(config.baseDir , argv.dir , `${argv.file}.css`);
    return gulp.src(filePath)
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(config.destDir));
});

// 将压缩的css文件重命名为.min文件
gulp.task('rename:css',['minify:css'],()=>{
    const renameFilePath = join(config.destDir,`${argv.file}.css`)
    // rename via string
    gulp.src(renameFilePath)
    .pipe($.rename(join(`${argv.file}.min.css`)))
    .pipe(gulp.dest(config.destDir));
});

// 删除压缩的css文件
gulp.task('del:css',['minify:css','rename:css'],()=>{
    del([join(config.destDir,`${argv.file}.css`)])
    .then(paths=>{
        if(paths.length > 0){
            log(chalk.blue('del:css task is done!'));
        }
    });
});

gulp.task('compress:css',['minify:css','rename:css','del:css'],()=>{
    log(chalk.blue('compress:css task is done!'));
});