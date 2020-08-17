module.exports = {
  devServer: {
    port: 3100, // 端口
    hot: true, // 热更新
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  },

  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // lintOnSave: false // 取消 eslint 验证
};