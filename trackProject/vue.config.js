var path = require('path');
var webpack = require('webpack');

module.exports = {
  outputDir: 'dist', // 默认dist
//   output: {
//     path: path.resolve(__dirname, './dist'), // 项目的打包文件路径
//     publicPath: '/dist/', // 通过devServer访问路径
//     filename: 'build.js' // 打包后的文件名
//   },
//   devServer: {
//     historyApiFallback: true, //historyApiFallback设置为true那么所有的路径都执行index.html。
//     overlay: true // 将错误显示在html之上
//   }
publicPath:'./',
assetsDir: "static",
devServer: {
  proxy: {
      "/": {
          target: "http://39.104.114.103:18089", // 需要跨域的目标url
          changeOrigin: true, // 将基于名称的虚拟托管网站的选项，如果不配置，请求会报404
          ws: true,
          pathRewrite: {
              "^/": ''
          }
      }
  }
}


};