import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Text,Image } from '@tarojs/components'
import './index.scss'
import { AtIcon } from 'taro-ui'

export default class GoodItem extends Component {
  //无后端
  // toGoodDetails(goodList){
  //   var goodList = encodeURI(JSON.stringify(goodList))
  //   Taro.navigateTo({
  //     url:`/pages/goodDetails/index?courseList=${goodList}`
  //   })
  // }
  toGoodDetails(id){
    Taro.navigateTo({
      url:`/pages/goodDetails/index?id=${id}`
    })
  }
  render () {
    const {goodList} = this.props
    if(!goodList.goodHead){
      return (
        <View className='goodItem-container' onClick={this.toGoodDetails.bind(this,goodList.objectId)}>
          <Image className='goodItem-img'/>
          <Text className='goodItem-title'>{goodList.title}</Text>
          <Text className='goodItem-producer'>{goodList.producer}</Text>
          <View className='goodItem-footer'>
            <View className='goodItem-student'>
            <AtIcon value='user' size='18' color='#212121'></AtIcon>
              {goodList.student + '人'}</View>
            <Text className='goodItem-price'>{'￥' + goodList.priceInt + '.' + goodList.priceFloat}</Text>
          </View>
        </View>
      )
    }
    else{
      return (
        <View className='goodItem-container' onClick={this.toGoodDetails.bind(this,goodList.objectId)}>
          <Image className='goodItem-img' src={goodList.goodHead.url}/>
          <Text className='goodItem-title'>{goodList.title}</Text>
          <Text className='goodItem-producer'>{goodList.producer}</Text>
          <View className='goodItem-footer'>
            <View className='goodItem-student'>
            <AtIcon value='user' size='18' color='#212121'></AtIcon>
              {goodList.student + '人'}</View>
            <Text className='goodItem-price'>{'￥' + goodList.priceInt + '.' + goodList.priceFloat}</Text>
          </View>
        </View>
      )
    }
  }
}