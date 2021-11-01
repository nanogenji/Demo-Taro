import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.css'
import { AtAvatar,AtSwipeAction } from 'taro-ui'
import Ava from '../../assets/user.png'

export default class Msg extends Component {
  toPostDetails(){
    Taro.navigateTo({
      url:'/pages/postDetails/index'
    })
  }

  render () {
    return (
      //初版布局
      // <View className='msg-container'>
      //   <View className='msg-user'>
      //     <AtAvatar className='msg-ava' circle image={Ava} size='small'></AtAvatar>
      //     <View className='msg-user-info'>
      //       <Text className='msg-id'>username</Text>
      //       <Text className='at-article__info'>2021.10.22</Text>
      //     </View>
      //   </View>
      //   <View className='msg-info'>
      //     <Text className='msg-content'>回复内容</Text>
      //     <View className='mag-post'>
      //       <Text className='msg-postmsg'>原主题信息</Text>
      //     </View>
      //   </View>
      // </View>
      

      <View className='msg-container' onClick={this.toPostDetails}>
        <View className='msg-user'>
          <AtAvatar className='msg-ava' circle image={Ava} size='small'></AtAvatar>
        </View>
        <View className='msg-info'>
          <View className='msg-user-info'>
            <Text className='msg-id'>username</Text>
            <Text className='at-article__info'>2021.10.22</Text>
          </View>
          
          <View className='msg-post'>
            <Text className='msg-content'>回复内容</Text>
            <View className='msg-postmsg-shell'>
              <Text className='msg-postmsg'>原主题信息</Text>
            </View>
          </View>
        </View>
      </View>


    )
  }
}