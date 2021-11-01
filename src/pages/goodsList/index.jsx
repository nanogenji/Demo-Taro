import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Text } from '@tarojs/components'
import './index.scss'
import {  } from 'taro-ui'
import GoodItem from '../../components/goodItem'

export default class GoodList extends Component {

  data = {
    option1: [
      { text: '全部商品', value: 0 },
      { text: '新款商品', value: 1 },
      { text: '活动商品', value: 2 },
    ],
    option2: [
      { text: '默认排序', value: 'a' },
      { text: '好评排序', value: 'b' },
      { text: '销量排序', value: 'c' },
    ],
    value1: 0,
    value2: 'a',
  }

  render () {

    return (
      <View className='goodList-container'>
        <View className='goodList-header'>
          {/* 这里应该有几个pick button */}
          <van-dropdown-menu>
            <van-dropdown-item value={this.data.value1} options={this.data.option1} />
            <van-dropdown-item value={this.data.value2} options={this.data.option2} />
          </van-dropdown-menu>
        </View>
        <View className='goodList-content'>
          <View className='goodList-content-row'>
            <GoodItem/>
            <GoodItem/>
          </View>
          <View className='goodList-content-row'>
            <GoodItem/>
            <GoodItem/>
          </View>
        </View>
      </View>
    )
  }
}