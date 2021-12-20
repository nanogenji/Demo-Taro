import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Text,Image } from '@tarojs/components'
import './index.scss'
import {  } from 'taro-ui'

export default class Index extends Component {

  toGoodDetails=(courseList)=>{
    // const {courseList} = this.props
    var courseList = encodeURI(JSON.stringify(courseList))
    // console.log(courseList)
    Taro.navigateTo({
      // url:`/pages/goodDetails/index?name=${courseList.name}&intro=${courseList.intro}&author=${courseList.author}`
      url:`/pages/goodDetails/index?courseList=${courseList}`
    })
  }


  render () {
    const {courseList} = this.props
    return (
      <View className='goodItemB-container' onClick={this.toGoodDetails.bind(this,courseList)}>
        <Image className='goodItemB-img'/>
        <View className='goodItemB-info'>
          <Text className='goodItemB-title'>{courseList.title} </Text>
          <Text className='goodItemB-detail'>{courseList.intro} </Text>
          <View className='goodItemB-authorAndPrice'>
            <Text className='goodItemB-author'>{courseList.author}</Text>
            <Text className='goodItemB-price'>
              <Text className='goodItemB-price-currency'>￥</Text>
              <Text className='goodItemB-price-integer'>{courseList.priceInt}</Text>
              <Text className='goodItemB-price-float'>.{courseList.priceFloat}</Text>
            </Text>
          </View>
          <View className='goodItemB-lesson'>
            <Text className='goodItemB-student'>{courseList.stuNum + '人参加'}</Text>
            <Text className='goodItemB-phase'>{'进行至' + courseList.stage}</Text>
          </View>
        </View>
      </View>
    )
  }
}