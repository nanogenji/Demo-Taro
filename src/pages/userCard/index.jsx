import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Text,Image, Button } from '@tarojs/components'
import './index.scss'
import { AtAvatar } from 'taro-ui'
import Ava from '../../assets/user.png'
import OnePost from '../../components/onePost'
import OneArticle from '../../components/oneArticle'

export default class Index extends Component {

  state = {postLists: [
      {id:'001',userName:'user1',time:'2小时前',content:`这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。
        这是文本段落。这是文本段落。这是文本落。这是文本段落。
      1234567890123456789012345678901234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ`,},
      {id:'002',userName:'user1',time:'2021年11月1日',content:`不是刚开学吗怎么就11月了555~  不是刚开学吗怎么就11月了555~  不是刚开学吗怎么就11月了555~`,},
      {id:'004',userName:'user1',time:'2021年3月1日',content:`水贴凑字数水贴凑字数水贴凑字数水贴凑字数水贴凑字数`,},
    ]
  }
  render () {
    const postLists = this.state.postLists
    return (
      <View className='userCard-container'>
        <Image className='userCard-bg'/>
        <View className='userCard-header'>
          <AtAvatar className='userCard-avater' circle size="large" image={Ava}/>
          <View className='userCard-header-info'>
            <Text className='userCard-name'>user1</Text>
            <Text className='userCard-sign'>系统维护中，暂时无法显示</Text>
          </View>
        </View>
        <View className='userCard-action'>
          <View className='userCard-action-info1'>
            <Text className='userCard-action-infoNum'>110</Text>
            <Text className='userCard-action-infoValue'>关注</Text>
          </View>
          <View className='userCard-action-info2'><View className='userCard-action-infoNum'>18</View><View className='userCard-action-infoValue'>粉丝</View></View>
          <View className='userCard-action-info3'><View className='userCard-action-infoNum'>59</View><View className='userCard-action-infoValue'>动态</View></View>
        </View>
        <View className='userCard-activities'>
          <Text className='userCard-activities-title'>动态</Text>
          <View className='userCard-activities-content'>
            { postLists.map((postList) =>{
                return <OnePost postList = {postList}/>
              })}
          </View>
        </View>
      </View>
    )
  }
}