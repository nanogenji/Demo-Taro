import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Text, Button } from '@tarojs/components'
import './index.scss'
import { AtAvatar,AtButton } from 'taro-ui'
import Ava from '../../assets/user.png'
import Like from '../../assets/like.png'
import Comments from '../../assets/comments.png'
import Repost from '../../assets/repost.png'
import Share from '../../assets/Share.png'

export default class OnePost extends Component {

  toPostDetails(){
    Taro.navigateTo({
      url:'/pages/postDetails/index'
    })
  }


  render () {
    const {postList} = this.props
    return (
      <View className="onePost" onClick={this.toPostDetails}>
        <View className='onePost-user'>
          <AtAvatar className='onePost_avatar' circle image={Ava}/>
          <View className='onePost-user-info'>
            <Text className='onePost_name'>{postList.userName}</Text>
            <Text className='onePost_title'>{postList.time + '发表了想法'}</Text>
          </View>
        </View>
        <View className='onePost-content'>{postList.content}</View>
        <View className='onePost_action'>
          <AtButton className='btn' size='small' full={false}>
            <image className='onePost_action_img' src={Like}/>
          </AtButton>
          <AtButton className='btn' size='small' full={false}>
            <image className='onePost_action_img' src={Comments}/>
          </AtButton>          
          <AtButton className='btn' size='small' full={false}>
            <image className='onePost_action_img' src={Repost}/>
          </AtButton>          
          <AtButton className='btn' size='small' full={false}>
            <image className='onePost_action_img' src={Share}/>
          </AtButton>
        </View>
      </View>
    )
  }
}