import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Text,Image } from '@tarojs/components'
import './index.scss'
import { AtIcon } from 'taro-ui'

export default class GoodItem extends Component {

  toGoodDetails(goodList){
    var goodList = encodeURI(JSON.stringify(goodList))
    Taro.navigateTo({
      url:`/pages/goodDetails/index?courseList=${goodList}`
    })
  }
  
  render () {
    const {goodList} = this.props
    return (
      <View className='goodItem-container' onClick={this.toGoodDetails.bind(this,goodList)}>
        <Image className='goodItem-img'/>
        <Text className='goodItem-title'>{goodList.title}</Text>
        <Text className='goodItem-producer'>{goodList.author}</Text>
        <View className='goodItem-footer'>
          <View className='goodItem-student'>
          <AtIcon value='user' size='18' color='#212121'></AtIcon>
            {goodList.stuNum + '人'}</View>
          <Text className='goodItem-price'>{'￥' + goodList.priceInt + '.' + goodList.priceFloat}</Text>
        </View>
      </View>
    )
  }
}