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
  // productionGzip: true,
  chainWebpack: config => {
    // 移除 prefetch 插件
    // config.plugins.delete('prefetch')

    // 或者
    // 修改它的选项：
    config.plugin('prefetch').tap(options => {
      options[0].fileBlacklist = options[0].fileBlacklist || []
      options[0].fileBlacklist.push(/myasyncRoute(.)+?\.js$/)
      return options
    })
  }
};