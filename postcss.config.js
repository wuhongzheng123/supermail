module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375, //视口宽度
      viewportHeight: 667, //视口高度
      unitPrecision: 5, //制定‘px’转换为视窗单位的小数位数
      viewportUnit: 'vw', //指定视窗单位
      selectorBlackList: ['ignore', 'tab-bar', 'tab-bar-item'], //指定不需要转换的类
      minPixelValue: 1, //小于或等于‘1px’不转换为视窗单位
      mediaQuery: false, //允许在媒体查询中转换‘px’
      exclude: [/TabBar/]
    }
  }
}
