export default {
  pages: [
    'pages/home/index',
    'pages/settings/index',
    'pages/createPost/index',
    'pages/index/index',
    'pages/community/index',
    'pages/notification/index',
    'pages/profile/index',
    'pages/cart/index',
    'pages/article/index',
    'pages/goodsList/index',
    'pages/goodDetails/index',
    'pages/postDetails/index',
    'pages/userCard/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#6190e8',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom:false,
    color: "#666",
    selectedColor: "#5e8c74",
    backgroundColor: "#fafafa",
    borderStyle: 'black',
    list: [{
      pagePath: "pages/home/index",
      iconPath:'./assets/tab-bar/home.png',
      text: "首页"
    }, {
      pagePath: "pages/community/index",
      iconPath:"./assets/tab-bar/community.png",
      text: "社区"
    }, {
      pagePath: "pages/notification/index",
      iconPath:"./assets/tab-bar/notifications.png",
      text: "通知"
    },{
      pagePath: "pages/profile/index",
      iconPath:"./assets/tab-bar/profile.png",
      text: "我的"
    }]
  },
}
