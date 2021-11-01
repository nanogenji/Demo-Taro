import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Text,Image } from '@tarojs/components'
import './index.scss'
import { AtIcon } from 'taro-ui'

export default class GoodItem extends Component {

  toGoodDetails(){
    Taro.navigateTo({
      url:'/pages/goodDetails/index'
    })
  }
  
  render () {
    return (
      <View className='goodItem-container' onClick={this.toGoodDetails}>
        <Image className='goodItem-img'/>
        <Text className='goodItem-title'>前端入门-1小时实操Taro项目</Text>
        <Text className='goodItem-producer'>大厂前端开发工程师</Text>
        <View className='goodItem-footer'>
          <View className='goodItem-student'>
          <AtIcon value='user' size='18' color='#212121'></AtIcon>
            1111人</View>
          <Text className='goodItem-price'>￥0.01</Text>
        </View>
      </View>
    )
  }
}