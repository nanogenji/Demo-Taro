import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Text } from '@tarojs/components'
import './index.scss'
import {  } from 'taro-ui'
import Bomb from '../../value/bomb'
// import Bmob from '../../assets/js/Bmob-2.2.4.min.js'
let db = new Bomb({sercretKey:"8a7e35df0e10c1ec", apiSafeCode:"000419"});

export default class Index extends Component {
  state={
    userInfo:[]
  }
  componentWillMount(){
    db.get_('user','WGZS333L').then((value) =>{
      this.setState({userInfo:value})
    })
  }
  render () {
    const userInfo = this.state.userInfo
    const name = this.props.name
    const value = this.props.value
    return (
      <View className = 'container'>
        <View className = 'key'>{name}</View>
        <View className = 'value'>{value}</View>
      </View>
    )
  }
}