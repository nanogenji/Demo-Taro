import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Text } from '@tarojs/components'
import './index.scss'
import { AtAvatar,AtButton } from 'taro-ui'
import Ava from '../../assets/user.png'
import Like from '../../assets/like.png'
import Comments from '../../assets/comments.png'
import Repost from '../../assets/repost.png'


export default class Review extends Component {

  render () {
    return (
      <View className='review-container'>
        <AtAvatar className='review-avatar' circle image={Ava}/>
        <View className='review-right'>
          <Text className='review-username'>Robot1</Text>
          <Text className='review-content'>这是回复测试123abc</Text>
          <View className='review-rightBottom'>
            <Text className='review-info'>2小时前</Text>
            <View className='review-rightBottom-action'>
              <AtButton className='btn' size='small' full={false}>
                <image className='review-rightBottom-action-img' src={Like}/>
              </AtButton>
              <AtButton className='btn' size='small' full={false}>
                <image className='review-rightBottom-action-img' src={Comments}/>
              </AtButton>          
              <AtButton className='btn' size='small' full={false}>
                <image className='review-rightBottom-action-img' src={Repost}/>
              </AtButton> 
            </View>
          </View>
        </View>
      </View>
    )
  }
}