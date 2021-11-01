import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text ,Button,Swiper, SwiperItem} from '@tarojs/components'
import './index.css'
import { AtButton } from 'taro-ui'
import Test from '../test'
// import Test from '../test'
// import *as Test from '../test'
// import Test from './test'


export default class Index extends Component {

  toTest(){
    Taro.navigateTo({
      url:'/pages/test/index'
    })
  }
  render () {
    return (
      <View className='index'>
          <Text>Hello</Text>
          <AtButton onClick={this.toTest}>to</AtButton>
          <Test/>
      </View>
      
    )
  }
}
