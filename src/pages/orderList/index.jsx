import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Text, ScrollView } from '@tarojs/components'
import './index.scss'
import {  } from 'taro-ui'
import OrderItem from '../../components/orderItem'
import Bomb from '../../value/bomb'
let db = new Bomb({sercretKey:"8a7e35df0e10c1ec", apiSafeCode:"000419"});

var Bmob = require('../../value/src/lib/app');
Bmob.initialize("8a7e35df0e10c1ec", "000419");
export default class OrderList extends Component {

  state = {
    orderLists:[
      {id:'001',shopName:'人民邮电出版社',goodName:'JavaScript高级程序设计',priceInt:'100',priceFloat:'99'},
      {id:'002',shopName:'中国电力出版社',goodName:'CSS权威指南（第三版）',priceInt:'70',priceFloat:'00'},
      {id:'003',shopName:'作家出版社',goodName:'活着',priceInt:'37',priceFloat:'59'},
    ],
    testLists:[]
  }

  componentWillMount(){
    db.getAll('user').then((value) => {
        this.setState({testLists:value})
    })
    const query = Bmob.Query('content');
    query.find().then(res => {
      console.log(res)
    });
  }

  render () {
    const orderLists = this.state.orderLists
    const testLists = this.state.testLists
    return (
      <ScrollView enableFlex={true} className='orderList-container'>
        {
          // orderLists.map((orderList) =>{
          //   return <OrderItem orderList = {orderList}/>
          // })
          console.log(testLists)
        }
      </ScrollView>
    )
  }
}