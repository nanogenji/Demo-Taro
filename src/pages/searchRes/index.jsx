import { Component } from 'react'
import Taro, { getCurrentInstance, Current } from '@tarojs/taro'
import { View,Text } from '@tarojs/components'
import './index.scss'
import {  } from 'taro-ui'
import GoodItem from '../../components/goodItem/index'
import Bomb from '../../value/bomb'

var Bmob = require('../../value/src/lib/app');
Bmob.initialize("8a7e35df0e10c1ec", "000419");

export default class Index extends Component {
  $instance = getCurrentInstance()
  state = {
    goodLists:[]
  }
  componentWillMount(){
    const goodLists = this.state.goodLists
    const keyWord = Current.router.params.keyWord
    const query = Bmob.Query("goods");
    query.equalTo("title", "==", keyWord);
    query.find().then(res => {
      this.setState({goodLists:res})
        console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  render () {
    const goodLists = this.state.goodLists
    return (
      <View>
        {
          (goodLists.length === 0) ?
          <View className='noResult'>暂无搜索结果，请换个关键词试试</View> :
          goodLists.map((goodList)=>{
            return <GoodItem goodList = {goodList}/>
          })
        }
      </View>
    )
  }
}