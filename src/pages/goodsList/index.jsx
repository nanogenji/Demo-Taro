import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Text, ScrollView } from '@tarojs/components'
import './index.scss'
import {  } from 'taro-ui'
import GoodItem from '../../components/goodItem'

export default class GoodList extends Component {

  state = {
    goodLists:[
      {id:'001',title:'前端入门-1小时实操Taro项目',author:'大厂前端开发工程师',stuNum:'1111',priceInt:'0',priceFloat:'01'},
      {id:'002',title:'前端实战-2小时实操React项目',author:'张老师',stuNum:'1102',priceInt:'12',priceFloat:'49'},
      {id:'003',title:'前端进阶-4小时实操Vue项目',author:'尤雨溪',stuNum:'163',priceInt:'0',priceFloat:'00'},
      {id:'004',title:'前端入门-7小时实操Angular项目',author:'小厂前端开发工程师',stuNum:'81',priceInt:'123',priceFloat:'07'},
      {id:'005',title:'随便是啥',author:'XXXX',stuNum:'13',priceInt:'1653',priceFloat:'00'},
    ]
  }
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
    const goodLists = this.state.goodLists
    return (
      <View className='goodList-container'>
        <View className='goodList-header'>
          {/* 这里应该有几个pick button */}
          <van-dropdown-menu>
            <van-dropdown-item value={this.data.value1} options={this.data.option1} />
            <van-dropdown-item value={this.data.value2} options={this.data.option2} />
          </van-dropdown-menu>
        </View>
        <ScrollView enableFlex={true} className='goodList-content'>
            {
              goodLists.map((goodList)=>{
                return <GoodItem goodList = {goodList}></GoodItem>
              })
            }
        </ScrollView>
      </View>
    )
  }
}