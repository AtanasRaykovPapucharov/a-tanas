const gulp = require('gulp')

// CSS
const sass = require('gulp-sass')


gulp.task('sass:compile', (done) => {
    gulp.src('src/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest('src/css'))
    done()
})

gulp.task('css:concat', (done) => {
    const concat = require('../../tools/my-concat-css')
    const inputDir = 'src/css'
    const outputFile= 'src/bundle.css'

    concat(inputDir, outputFile)
    done()
})

gulp.task('sass:watch', () => {
    gulp.watch('src/**/*.scss', ['sass:compile', 'css:concat'])
})
