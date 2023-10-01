const gulp = require('gulp');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano'); 
const autoprefixer = require('gulp-autoprefixer');
const concatCss = require('gulp-concat-css');
const presetEnv = require('postcss-preset-env');

function bundleCSS() {
  const plugins = [
    presetEnv({ stage: 1 }), // Use postcss-preset-env for future CSS features and browser support
    cssnano({
      preset: 'default', // Use the default preset for minification
      discardComments: { removeAll: true }, // Remove all comments
      discardUnused: true, // Keep unused CSS rules
      mergeIdents: false, // Avoid merging keyframes and animations by default
    }),
  ];
  return gulp.src('src/css/**/*.css') // Specify your source CSS files
  .pipe(autoprefixer()) // Add vendor prefixes
  .pipe(concatCss('bundle.css')) // Concatenate CSS files into a single bundle.css
  .pipe(postcss(plugins))
  .pipe(gulp.dest('dist/')) // Output directory (create a "css" folder in "dist")
}

function watchCSS() {
  gulp.watch('src/css/**/*.css', bundleCSS); // Watch for changes in CSS files and trigger optimizeCSS
}

exports.bundleCSS = bundleCSS;
exports.watchCSS = watchCSS;
