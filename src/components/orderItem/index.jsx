import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Text, Button,Image } from '@tarojs/components'
import './index.scss'
import { AtIcon } from 'taro-ui'

export default class OrderItem extends Component {

  render () {
    const {orderList} = this.props
    return (
      <View className='orderItem-container'>
        <View className='orderItem-header'>
          <Image className='orderItem-shopImg'/>
          <Text className='orderItem-shopName'>{orderList.shopName}</Text>
          <AtIcon className='orderItem-arrow' value='chevron-right' size='25' color='#cfd8dc'></AtIcon>
        </View>
        <View className='orderItem-content'>
            <Image className='orderItem-goodImg'></Image>
            <View className='orderItem-content-right'>
              <View className='orderItem-content-right-info'>
              <Text className='orderItem-goodName'>{orderList.goodName}</Text>
                <View className='orderItem-price'>
                  <Text className='orderItem-price-currency'>￥</Text>
                  <Text className='orderItem-price-integer'>{orderList.priceInt}</Text>
                  <Text className='orderItem-price-float'>.{orderList.priceFloat}</Text>
                </View>
              </View>
              <View className='orderItem-right-footer'>
                <Button className='btn1'>客服售后</Button>
                <Button className='btn2'>查看详情</Button>
              </View>
            </View>
        </View>
      </View>
    )
  }
}