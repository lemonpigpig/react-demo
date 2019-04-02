module.exports = {
  plugins: {
    // to edit target browsers: use "browserlist" field in package.json
    autoprefixer: {
      browsers: ['last 10 versions']
    },
    // this can not work why i do not know
    'postcss-px2rem': {
      remUnit: 60
    }
  }
}
