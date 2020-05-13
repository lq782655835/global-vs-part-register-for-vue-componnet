module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    // babel-plugin-import 按需加载ant-design-vue
    [
      'import',
      {
        libraryName: 'ant-design-vue',
        libraryDirectory: 'es',
        // style: true // 加载less文件，再通过vue.config.js配置less-loader来定制主题
      }
    ],
  ]
}
