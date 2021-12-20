import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Text, Button,Image } from '@tarojs/components'
// import './index.css'
import './index.scss'
import {  } from 'taro-ui'

export default class OneArticle extends Component {

  toInfo=(id)=>{
    var id = encodeURI(JSON.stringify(id))
    Taro.navigateTo({
      url:`/pages/article/index?id=${id}`
    })
  }
  render () {
    const {articleList} = this.props
    return (
      //css版
      // <View className="oneArticle" onClick={this.toInfo}>
      //   <View className='article-text'>
      //     <Text className='at-article__h3'>俄罗斯因疫情全国放假9天</Text>
      //     <Text className='at-article__info'>今日头条 7分钟前</Text>
      //   </View>
      //   <Image 
      //     className='article-img' 
      //     mode='widthFix' />
      // </View>

      // scss版
      <View className="oneArticle" onClick={this.toInfo.bind(this,articleList.id)}>
        {/* <View className='text'>
          <Text className='at-article__h3'>俄罗斯因疫情全国放假9天</Text>
          <Text className='at-article__info'>今日头条 7分钟前</Text>
        </View> */}
        <View className='text'>
          <Text className='text-title'>{articleList.title}</Text>
          <Text className='text-info'>{articleList.author + '  ' + articleList.time}</Text>
        </View>
        <Image 
          className='img' 
          mode='widthFix' />
      </View>
    )
  }
}