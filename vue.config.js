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
    console.log(config)
    config.output
      .set('filename', '[name]/js/[name].js')
      .set('chunkFilename', '[name]/js/[name].js')

    config
      .plugin('MiniCssExtractPlugin')
      .use(require('mini-css-extract-plugin'), [{
        filename: "[name].css",
        chunkFilename: "[id].css"
      }])
    if (process.env.NODE_ENV === 'production') {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
  }
}