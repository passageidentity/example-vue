module.exports = {
  publicPath: '/',
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => ({
        ...options,
        compilerOptions: {
          // treat any tag that starts with passage- as custom elements
          isCustomElement: (tag) => tag.startsWith('passage-'),
        },
      }))
  },
}
