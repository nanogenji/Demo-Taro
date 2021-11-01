const config = {
  projectName: 'myApp',
  date: '2021-10-9',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {
  },
  copy: {
    patterns: [
      //test
      { from: 'src/components/vant-weapp/dist/wxs', to: 'dist/components/vant-weapp/dist/wxs' },
      // { from: 'src/components/vant-weapp/dist/common/style', to: 'dist/components/vant-weapp/dist/common/style' },
      { from: 'src/components/vant-weapp/dist/button/index.wxss', to: 'dist/components/vant-weapp/dist/button/index.wxss' },
      { from: 'src/components/vant-weapp/dist/button/index.wxml', to: 'dist/components/vant-weapp/dist/button/index.wxml' },
      { from: 'src/components/vant-weapp/dist/dropdown-item/index.wxml', to: 'dist/components/vant-weapp/dist/dropdown-item/index.wxml' },
      { from: 'src/components/vant-weapp/dist/dropdown-item/index.wxss', to: 'dist/components/vant-weapp/dist/dropdown-item/index.wxss' },
      { from: 'src/components/vant-weapp/dist/dropdown-menu/index.wxml', to: 'dist/components/vant-weapp/dist/dropdown-menu/index.wxml' },
      { from: 'src/components/vant-weapp/dist/dropdown-menu/index.wxs', to: 'dist/components/vant-weapp/dist/dropdown-menu/index.wxs' },
      { from: 'src/components/vant-weapp/dist/dropdown-menu/index.wxss', to: 'dist/components/vant-weapp/dist/dropdown-menu/index.wxss' },
      { from: 'src/components/vant-weapp/dist/submit-bar', to: 'dist/components/vant-weapp/dist/submit-bar' },
      { from: 'src/components/vant-weapp/dist/goods-action', to: 'dist/components/vant-weapp/dist/goods-action' },
      { from: 'src/components/vant-weapp/dist/goods-action-button', to: 'dist/components/vant-weapp/dist/goods-action-button' },
      { from: 'src/components/vant-weapp/dist/goods-action-icon', to: 'dist/components/vant-weapp/dist/goods-action-icon' },
      // { from: 'src/components/vant-weapp/dist/calendar/index.wxs', to: 'dist/components/vant-weapp/dist/calendar/index.wxs' },
      // { from: 'src/components/vant-weapp/dist/calendar/utils.wxs', to: 'dist/components/vant-weapp/dist/calendar/utils.wxs' },
      // { from: 'src/components/vant-weapp/dist/calendar/calendar.wxml', to: 'dist/components/vant-weapp/dist/calendar/calendar.wxml' },
      // { from: 'src/components/vant-weapp/dist/calendar/components/month/index.wxs', to: 'dist/components/vant-weapp/dist/calendar/components/month/index.wxs' },
    ],
    options: {
    }
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          //禁止转换vant样式
          selectorBlackList: [/van-/]
        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    esnextModules: ['taro-ui']
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
