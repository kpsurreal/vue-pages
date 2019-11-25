let pageMethod = require('./util/getPages.js');
pages = pageMethod.pages();

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  outputDir: 'dist',
  assetsDir: '',
  pages,
  publicPath: process.env.NODE_ENV === 'production'
  ? '/dist/'
  : '/',

  css: {
    loaderOptions: {
        postcss: {
            plugins: [
                require('postcss-px2rem')({remUnit: 75}), // 换算的基数
            ]
        }
    }
  },
  chainWebpack: config => {
    config.output
      .set('filename', '[name]/js/[name].js')
      .set('chunkFilename', '[name]/js/[name].js')

    config
      .plugin('extract-css')
      .use(MiniCssExtractPlugin, [{
        filename: "[name]/css/[name].css",
        chunkFilename: "[name]/css/[id].css"
      }])
    if (process.env.use_analyzer) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
  }
}