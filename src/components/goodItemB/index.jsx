import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Text,Image } from '@tarojs/components'
import './index.scss'
import {  } from 'taro-ui'

export default class Index extends Component {
  //无后端
  // toGoodDetails=(courseList)=>{
  //   // const {courseList} = this.props
  //   var courseList = encodeURI(JSON.stringify(courseList))
  //   // console.log(courseList)
  //   Taro.navigateTo({
  //     url:`/pages/goodDetails/index?courseList=${courseList}`
  //   })
  // }

  toGoodDetails=(id)=>{
    Taro.navigateTo({
      url:`/pages/goodDetails/index?id=${id}`
    })
  }
  WeeksBetw=(date1, date2)=> {
    //这里的date1,date2都是Date对象
    var d1 = new Date(date1);
    var d2 = new Date(date2);
    var dt1 = d1.getTime();
    var dt2 = d2.getTime();
    return parseInt(Math.abs(dt2 - dt1) / 1000 / 60 / 60 / 24 / 7);
    }

  // componentDidMount(){
  //   const {courseList} = this.props
  //   var d1 = new Date(courseList.createdAt);
  //   var d2 = new Date(courseList.updatedAt);
  //   var dt1 = d1.getTime();
  //   console.log('dt1:'+dt1)
  //   var dt2 = d2.getTime();
  //   console.log('dt2:'+dt2)
  //   console.log(Math.abs(dt2 - dt1))
  //   console.log(parseInt(Math.abs(dt2 - dt1) / 1000 / 60 / 60 / 24 / 7));
  // }
  componentWillMount(){
    // const {courseList} = this.props
    // console.log(courseList)
    // console.log(courseList.goodHead)
    // console.log(courseList.goodHead.url === undefined)
  }

  render () {
    const {courseList} = this.props
    if(!courseList.goodHead){
      return (
        <View className='goodItemB-container' onClick={this.toGoodDetails.bind(this,courseList.objectId)}>
          <Image className='goodItemB-img'/>
          <View className='goodItemB-info'>
            <Text className='goodItemB-title'>{courseList.title} </Text>
            <Text className='goodItemB-detail'>{courseList.intro} </Text>
            <View className='goodItemB-authorAndPrice'>
              <Text className='goodItemB-author'>{courseList.producer}</Text>
              <Text className='goodItemB-price'>
                <Text className='goodItemB-price-currency'>￥</Text>
                <Text className='goodItemB-price-integer'>{courseList.priceInt}</Text>
                <Text className='goodItemB-price-float'>.{courseList.priceFloat}</Text>
              </Text>
            </View>
            <View className='goodItemB-lesson'>
              <Text className='goodItemB-student'>{courseList.student + '人参加'}</Text>
              <Text className='goodItemB-phase'>{'进行至第' + this.WeeksBetw(courseList.createdAt,courseList.updatedAt) + '周'}</Text>
            </View>
          </View>
        </View>
      )
    }
    else{
      return (
        <View className='goodItemB-container' onClick={this.toGoodDetails.bind(this,courseList.objectId)}>
          <Image className='goodItemB-img' mode='scaleToFill' src={courseList.goodHead.url}/>
          <View className='goodItemB-info'>
            <Text className='goodItemB-title'>{courseList.title} </Text>
            <Text className='goodItemB-detail'>{courseList.intro} </Text>
            <View className='goodItemB-authorAndPrice'>
              <Text className='goodItemB-author'>{courseList.producer}</Text>
              <Text className='goodItemB-price'>
                <Text className='goodItemB-price-currency'>￥</Text>
                <Text className='goodItemB-price-integer'>{courseList.priceInt}</Text>
                <Text className='goodItemB-price-float'>.{courseList.priceFloat}</Text>
              </Text>
            </View>
            <View className='goodItemB-lesson'>
              <Text className='goodItemB-student'>{courseList.student + '人参加'}</Text>
              <Text className='goodItemB-phase'>{'进行至第' + this.WeeksBetw(courseList.createdAt,courseList.updatedAt) + '周'}</Text>
            </View>
          </View>
        </View>
      )
    }
  }
}