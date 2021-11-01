import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Text,Image } from '@tarojs/components'
import './index.scss'
import {  } from 'taro-ui'

export default class Index extends Component {

  toGoodDetails(){
    Taro.navigateTo({
      url:'/pages/goodDetails/index'
    })
  }


  render () {
    return (
      <View className='goodItemB-container' onClick={this.toGoodDetails}>
        <Image className='goodItemB-img'/>
        <View className='goodItemB-info'>
          <Text className='goodItemB-title'>Taro文档</Text>
          <Text className='goodItemB-detail'>
            "Taro 是一个开放式跨端跨框架解决方案，
            支持使用 React/Vue/Nerv 等框架来开发 微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ 小程序 / H5 / RN 等应用。"
          </Text>
          <Text className='goodItemB-author'>凹凸实验室</Text>
          <View className='goodItemB-lesson'>
            <Text className='goodItemB-student'>192人参加</Text>
            <Text className='goodItemB-phase'>进行至第8周</Text>
          </View>
          <Text></Text>
        </View>
      </View>
    )
  }
}