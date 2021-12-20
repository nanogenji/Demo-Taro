import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Text, ScrollView } from '@tarojs/components'
import './index.scss'
import {  } from 'taro-ui'
import OrderItem from '../../components/orderItem'
export default class Index extends Component {

  state = {
    orderLists:[
      {id:'001',shopName:'人民邮电出版社',goodName:'JavaScript高级程序设计',priceInt:'100',priceFloat:'99'},
      {id:'002',shopName:'中国电力出版社',goodName:'CSS权威指南（第三版）',priceInt:'70',priceFloat:'00'},
      {id:'003',shopName:'作家出版社',goodName:'活着',priceInt:'37',priceFloat:'59'},
    ]
  }


  render () {
    const orderLists = this.state.orderLists
    return (
      <ScrollView enableFlex={true} className='orderList-container'>
        {
          orderLists.map((orderList) =>{
            return <OrderItem orderList = {orderList}/>
          })
        }
      </ScrollView>
    )
  }
}