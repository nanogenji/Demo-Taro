import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Swiper,SwiperItem,Text, Button,ScrollView } from '@tarojs/components'
import './index.scss'
import { AtSearchBar,AtGrid,AtCard,AtFab } from 'taro-ui'
import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'
import { useState } from 'react'
import GoodItemB from '../../components/goodItemB'
import Msg from '../../components/msg'
import Bomb from '../../value/bomb'
// import Bmob from '../../assets/js/Bmob-2.2.4.min.js'
let db = new Bomb({sercretKey:"8a7e35df0e10c1ec", apiSafeCode:"000419"});
export default class Home extends Component {
  // constructor () {
  //   super(...arguments)
  //   this.state = {
  //     value: ''
  //   }
  // }
    state = {
      value: '',
      courseLists:[
        {
          id:'001',
          title:'Taro文档',
          intro:'"Taro 是一个开放式跨端跨框架解决方案，支持使用 React 框架来开发微信小程序"',
          producer:'凹凸实验室',
          priceInt:'100',
          priceFloat:'49',
          student:'192',
          stage:'第8周'
      },
        {id:'002',title:'TypeScript文档',intro:'"TypeScript 是 JavaScript 的一个超集，支持 ECMAScript 6 标准（ES6教程）。"',producer:'Microsoft',priceInt:'00',priceFloat:'99',student:'059',stage:'第1周'},
        {id:'003',title:'Node文档',intro:'"Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。"',producer:'Ryan Dahl',priceInt:'31',priceFloat:'99',student:'021',stage:'第1周'},
        {id:'004',title:'Nginx文档',intro:'"Nginx是一个高性能的HTTP和反向代理web服务器，同时也提供了IMAP/POP3/SMTP服务。"',producer:'伊戈尔·瑟索耶夫',priceInt:'7',priceFloat:'08',student:'103',stage:'第1周'},
        {id:'005',title:'React文档',intro:'"用于构建用户界面的 JavaScript 库"',producer:'Facebook',priceInt:'00',priceFloat:'00',student:'652',stage:'第1周'},
      ],
      testLists:[],
      gaodu:0
    }

  onChange = (value) => { 
    this.setState({
      value: value
    })
    console.log(value)
  }
  onConfirm = () =>{
    console.log(this.state.value+' 已提交')
  }
  toCart= ()=>{
    Taro.navigateTo({
      url:'/pages/cart/index'
    })
  }
  toGoodsList= ()=>{
    Taro.navigateTo({
      url:'/pages/goodsList/index'
    })
  }
  toGoodDetails= ()=>{
    Taro.navigateTo({
      url:'/pages/goodDetails/index'
    })
  }

  testNavi=() =>{
    // Taro.navigateTo({
    //   url:'/pages/login/index'
    // })
    const courseLists = this.state.courseLists
    const testLists = this.state.testLists
    // console.log(courseLists)
    console.log(testLists)
  }

  onPullDownRefresh() {
    console.log('onPullDownRefresh...........')

    // TODO 这里加重新刷新界面的要的操作，比如网络请求

    // 接口请求完毕后隐藏两个loading , 标题和下拉区域
    setTimeout(()=>{
      Taro.hideLoading();
      Taro.stopPullDownRefresh();
    },1000)
  }

  //todo:监听页面滑动以改变Fab
  // onPageScroll(a) {
  //   const _this = this
  //   const gaodu = this.state.gaodu
  //   var flag = 1;
  //   if(gaodu < a.scrollTop && flag === 1){
  //     console.log('向下滑动')
  //     // console.log(gaodu - a.scrollTop)
  //     flag = 0
  //   }else if(gaodu > a.scrollTop && flag === 0){
  //     console.log('向上滑动')
  //     flag = 1
  //   }
  //   setTimeout(function(){
  //     _this.setState({gaodu:a.scrollTop})
  //   },300)
  // }

  componentWillMount(){
    db.getAll('goods').then((value) => {
        this.setState({testLists:value})
    })
  }

  loadcomponent=()=>{
    const testLists = this.state.testLists

    if(testLists instanceof Object){
      testLists.map((courseList) =>{
        // return <GoodItemB courseList = {courseList}/>
        })
      // return <GoodItemB courseList = {testLists[0]}/>
    }
    else{
      console.log('还没加载好')
    }
  }
  render () {
    const HomeGirdList = [
      {
        image:require('../../assets/lesson.png'),
        value: '精品推荐'
      },
      {
        image:require('../../assets/lesson.png'),
        value: '名校课程'
      },
      {
        image:require('../../assets/lesson.png'),
        value: '信息技术'
      },
      {
        image:require('../../assets/lesson.png'),
        value: '经济管理'
      },
      {
        image:require('../../assets/lesson.png'),
        value: '职业规划'
      },
      {
        image:require('../../assets/lesson.png'),
        value: '生活技能'
      },
      {
        image:require('../../assets/lesson.png'),
        value: '考证就业'
      },
      {
        image:require('../../assets/lesson.png'),
        value: '全部课程'
      }
    ]
    const courseLists = this.state.courseLists
    const testLists = this.state.testLists
    var words = this.state.words
    return (
      <ScrollView className='home-container'>
        {/* <View style='width:100%;height:900px;background-color: #fff;' > */}
          {/* <Text className='t1'>首页</Text> */}
          <AtSearchBar
            value={this.state.value}
            onChange={this.onChange.bind(this)}
            onConfirm={this.onConfirm}
            onActionClick={this.onConfirm}
          />
          <Swiper
            className='home-swiper'
            indicatorColor='#999'
            indicatorActiveColor='#fff'
            vertical={false}
            circular
            indicatorDots
            autoplay
            onClick={this.testNavi}
            >
            <SwiperItem>
              <View className='ban1'>
                {/* <image src={banner1}></image> */}
                <image></image>
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className='ban2'>
                {/* <image src={banner2}></image> */}
                <image></image>
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className='ban3'>
                {/* <image src={require('../../assets/banner3.jpg')}></image> */}
                <image></image>
              </View>
            </SwiperItem>
          </Swiper>
          <View className='homeCategory'>
          <AtGrid columnNum={4} hasBorder={false} data={HomeGirdList} onClick={this.toGoodsList}/>
          </View>
          <View className='home-goodList'>
            <Text className='home-goodList-title'>精选好课</Text>
            <View enableFlex={true} className='home-goodList-content'>
            {  
              testLists.map((courseList) =>{
              return <GoodItemB courseList = {courseList}/>
              })}
            </View>
          </View>
          <AtFab className='tocartFab' onClick={this.toCart}>
            <Text className='at-fab__icon at-icon at-icon-shopping-cart'></Text>
          </AtFab>
          {/* <Button onClick = {this.A}>我是弹窗</Button>
          <AtButton type='primary' onClick = {this.toDetail}>点击跳转</AtButton> */}
        {/* </View> */}
        {/* <Demo /> */}
      </ScrollView>
    )
  }
}
//320*128

// const Demo = () => {
//   const [admin, setAdmin] = useState({
//     name: "",
//     tel: ""
//   })

//   const btnClick = () => {
//     Taro.request({
//       url: "http://localhost:3001/user"
//     })
//     .then((res) => {console.log(res)}, (err) => {console.log(err)})
//   }
//   return (
//     <View>
//       <Text>hello, {admin.name}</Text>
//       <Button onClick={() => btnClick()}>dianwo</Button>
//     </View>
//   )
// }