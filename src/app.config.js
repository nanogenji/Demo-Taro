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
    'pages/createArticle/index',
    'pages/orderList/index',
    'pages/login/index',
    'pages/accountInfo/index',
    'pages/feedback/index',
    'pages/professionTest/index',
    'pages/professionTestInfo/index',
    'pages/professionTestRes/index',
    'pages/signUp/index',
  ],
  // subPackages:[
  //   {
  //     root:'pagesA/',
  //       pages: [
  //         'professionTest/index',
  //         'professionTestInfo/index',
  //         'professionTestRes/index',
  //       ]
  //   }
  // ],
  window: {
    backgroundTextStyle: 'light',
    // navigationBarBackgroundColor: '#6190e8',
    navigationBarBackgroundColor: '#3f80dd',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    // enablePullDownRefresh: true,
    // backgroundTextStyle: "dark"
  },
  tabBar: {
    custom:false,
    color: "#666",
    selectedColor: "#3f80dd",
    backgroundColor: "#fafafa",
    borderStyle: 'black',
    list: [{
      pagePath: "pages/home/index",
      iconPath:'./assets/tab-bar/home.png',
      selectedIconPath:'./assets/tab-bar/home-fill.png',
      text: "首页"
    }, {
      pagePath: "pages/community/index",
      iconPath:"./assets/tab-bar/community.png",
      selectedIconPath:'./assets/tab-bar/community-fill.png',
      text: "社区"
    }, {
      pagePath: "pages/notification/index",
      iconPath:"./assets/tab-bar/notifications.png",
      selectedIconPath:'./assets/tab-bar/notifications-fill.png',
      text: "通知"
    },{
      pagePath: "pages/profile/index",
      iconPath:"./assets/tab-bar/profile.png",
      selectedIconPath:'./assets/tab-bar/profile-fill.png',
      text: "我的"
    }]
  },
}
