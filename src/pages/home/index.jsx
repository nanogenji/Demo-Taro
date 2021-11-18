import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Swiper,SwiperItem,Text, Button } from '@tarojs/components'
import './index.scss'
import { AtSearchBar,AtGrid,AtCard,AtFab } from 'taro-ui'
import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'
import { useState } from 'react'
import GoodItemB from '../../components/goodItemB'

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
        {id:'001',name:'Taro文档',intro:'"Taro 是一个开放式跨端跨框架解决方案，支持使用 React 框架来开发微信小程序"',author:'凹凸实验室',stuNum:'192',stage:'第8周'},
        {id:'002',name:'TypeScript文档',intro:'"TypeScript 是 JavaScript 的一个超集，支持 ECMAScript 6 标准（ES6教程）。"',author:'Microsoft',stuNum:'059',stage:'第1周'},
      ],
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
    Taro.navigateTo({
      url:'/pages/userCard/index'
    })
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
    var words = this.state.words
    return (
      <View className='home-container'>
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
            <View className='home-goodList-content'>
            {  
              courseLists.map((courseList) =>{
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
      </View>
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