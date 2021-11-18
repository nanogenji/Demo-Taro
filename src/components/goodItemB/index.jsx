import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Text,Image } from '@tarojs/components'
import './index.scss'
import {  } from 'taro-ui'

export default class Index extends Component {

  toGoodDetails(){
    Taro.navigateTo({
      url:'/pages/goodDetails/index'
    })
  }


  render () {
    const {courseList} = this.props
    return (
      <View className='goodItemB-container' onClick={this.toGoodDetails}>
        <Image className='goodItemB-img'/>
        <View className='goodItemB-info'>
          <Text className='goodItemB-title'>{courseList.name} </Text>
          <Text className='goodItemB-detail'>{courseList.intro} </Text>
          <Text className='goodItemB-author'>{courseList.author}</Text>
          <View className='goodItemB-lesson'>
            <Text className='goodItemB-student'>{courseList.stuNum + '人参加'}</Text>
            <Text className='goodItemB-phase'>{'进行至' + courseList.stage}</Text>
          </View>
          <Text></Text>
        </View>
      </View>
    )
  }
}