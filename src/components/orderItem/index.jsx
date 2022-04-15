import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Text, Button,Image } from '@tarojs/components'
import './index.scss'
import { AtIcon,AtMessage } from 'taro-ui'
import Bomb from '../../value/bomb'
let db = new Bomb({sercretKey:"8a7e35df0e10c1ec", apiSafeCode:"000419"});

var Bmob = require('../../value/src/lib/app');
Bmob.initialize("8a7e35df0e10c1ec", "000419");

export default class OrderItem extends Component {

  togoodDetail=(objectId)=>{
    const query = Bmob.Query('goods');
    query.get(objectId).then(res => {
      Taro.navigateTo({
        url:`/pages/goodDetails/index?id=${objectId}`
      })
      console.log(res)
    }).catch(err => {
      Taro.atMessage({
        'message': '未找到商品信息',
        'type': "error",
      })
      console.log(err)
    })
  }

  render () {
    const {orderList} = this.props
    if(!orderList.goodHead){
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
                  <Button className='btn2' onClick={this.togoodDetail.bind(this,orderList.objectId)}>查看详情</Button>
                </View>
              </View>
          </View>
          <AtMessage/>
        </View>
      )
    }
    else{
      return (
        <View className='orderItem-container'>
          <View className='orderItem-header'>
            <Image className='orderItem-shopImg'/>
            <Text className='orderItem-shopName'>{orderList.shopName}</Text>
            <AtIcon className='orderItem-arrow' value='chevron-right' size='25' color='#cfd8dc'></AtIcon>
          </View>
          <View className='orderItem-content'>
              <Image className='orderItem-goodImg' mode='scaleToFill' src={orderList.goodHead.url}/>
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
                  <Button className='btn2' onClick={this.togoodDetail.bind(this,orderList.objectId)}>查看详情</Button>
                </View>
              </View>
          </View>
          <AtMessage/>
        </View>
      )
    }

  }
}