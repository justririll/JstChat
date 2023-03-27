const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/',
  // publicPath: process.env.NODE_ENV === 'production'
  // ? '/Chat/'
  // : '/',
  transpileDependencies: true,
  // devServer: {
  //   port: 8888
  // }
})
