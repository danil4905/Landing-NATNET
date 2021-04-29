let gulp = require('gulp');
let sass = require('gulp-sass');


function mainFunction (done) {
    gulp.src('./scss/main.scss')
    .pipe (sass({
        errorLogToConsol: true
        //outputStyle:'compressed'
    }))
    .on('error', console.error.bind(console))
    .pipe (gulp.dest('./css/'));
    done();
}

gulp.task(mainFunction);
