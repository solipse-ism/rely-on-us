const cssnano = require('cssnano');
const postcssPresentEnv = require('postcss-preset-env');
const autoprefixer = require('autoprefixer');


module.exports = {
  plugins: [
      cssnano({
          preset: 'default',
      }),
      postcssPresentEnv({
        stage: 1,
      }),
      autoprefixer({
        
      }),

  ],
};