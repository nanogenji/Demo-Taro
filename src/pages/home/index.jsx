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

  constructor () {
    super(...arguments)
    this.state = {
      value: ''
    }
  }

  onChange (value) {
    this.setState({
      value: value
    })
  }
  toCart(){
    Taro.navigateTo({
      url:'/pages/cart/index'
    })
  }
  toGoodsList(){
    Taro.navigateTo({
      url:'/pages/goodsList/index'
    })
  }
  toGoodDetails(){
    Taro.navigateTo({
      url:'/pages/goodDetails/index'
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
    return (
      <View className='home-container'>
        {/* <View style='width:100%;height:900px;background-color: #fff;' > */}
          {/* <Text className='t1'>首页</Text> */}
          <AtSearchBar
            value={this.state.value}
            onChange={this.onChange.bind(this)}
          />
          <Swiper
            className='home-swiper'
            indicatorColor='#999'
            indicatorActiveColor='#fff'
            vertical={false}
            circular
            indicatorDots
            autoplay
            onClick={this.toGoodDetails}
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
          {/* <View className='home-lessonlist'>
            <AtCard
              note='课程介绍'
              extra='教师A'
              title='课程1'
              thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
            >
            </AtCard>
            <AtCard className='card'
            note='课程介绍'
            extra='教师B'
            title='课程2'
            thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
            >
            </AtCard>
          </View> */}
          <View className='home-goodList'>
            <Text className='home-goodList-title'>精选好课</Text>
            <View className='home-goodList-content'>
              <GoodItemB/>
              <GoodItemB/>
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