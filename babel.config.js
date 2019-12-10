module.exports = {
  presets: [
    '@vue/app',
    // 添加 babel-preset-env 配置
    ['@babel/preset-env', {
      'modules': false
    }
    ]
  ],
  plugins: [
    'lodash',
    'jsx-v-model',
    // element官方教程
    [
      'component',
      {
        'libraryName': 'element-ui',
        'styleLibraryName': 'theme-chalk'
      }
    ]
  ]
}
