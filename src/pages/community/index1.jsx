import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Text,ScrollView } from '@tarojs/components'
import { AtActivityIndicator } from 'taro-ui'
import './index.scss'

export default class Community extends Component {

  onPullDownRefresh() {
    console.log('onPullDownRefresh...........')
    Taro.showLoading({
      title: 'loading....'
    })
 
    // TODO 这里加重新刷新界面的要的操作，比如网络请求
 
    // 接口请求完毕后隐藏两个loading , 标题和下拉区域
    Taro.hideLoading();
    Taro.stopPullDownRefresh();
  }
  render () {
    return (
      <ScrollView>
        <Text>yemian</Text>
      </ScrollView>
    )
  }
}