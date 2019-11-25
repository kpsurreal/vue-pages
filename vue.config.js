let pageMethod = require('./util/getPages.js');
pages = pageMethod.pages();
module.exports = {
  outputDir: 'dist',
  assetsDir: '',
  pages,
  publicPath: process.env.NODE_ENV === 'production'
  ? '/dist/'
  : '/',
  chainWebpack: config => {

  }
}