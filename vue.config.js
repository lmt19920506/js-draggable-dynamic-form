let path = require('path')
function resolve(dir) {
  path.join(__dirname, dir)
}

module.exports = {
  // 修改src目录为example目录
  pages: {
    index: {
      // 页面入口
      entry: 'examples/main.js',
      // 模板来源
      template: 'public/index.html',
      // 输出文件名
      filename: 'index.html'
    }
  },
  configureWebpack: {
    resolve: {
      extensions: ['js', 'vue'],
      alias: {
        '@': resolve('examples')
      }
    }
  }
}