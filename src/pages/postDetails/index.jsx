import { Component } from 'react'
import Taro, { Current } from '@tarojs/taro'
import { View,Text,Input } from '@tarojs/components'
import './index.scss'
import { AtAvatar,AtButton } from 'taro-ui'
import Review from '../../components/review'
import Ava from '../../assets/user.png'
import Like from '../../assets/like.png'
import Comments from '../../assets/comments.png'
import Repost from '../../assets/repost.png'
import Share from '../../assets/Share.png'
import Star from '../../assets/star.png'
import OnePost from '../../components/onePost'

export default class postDetails extends Component {
  state = {

  }
  // componentDidMount=()=>{
  //   console.log(this.$router.params.id)
  // }

  render () {
    const postList = JSON.parse(decodeURI(Current.router.params.postList))
    return (
      <View className='postDetails-bg'>
        <View className='postDetails-container'>
          <View className='postDetails-user'>
            <AtAvatar className='postDetails_avatar' circle image={Ava}/>
            <View className='postDetails-user-info'>
              <Text className='postDetails_name'>{postList.userName}</Text>
              <Text className='postDetails_title'>{postList.time + '发表了想法'}</Text>
            </View>
          </View>
          <View className='postDetails-content'>
            <Text>{postList.content}</Text>
          </View>
          <View className='postDetails_action'>
            <AtButton className='btn' size='small' full={false}>
              <image className='postDetails_action_img' src={Like}/>
            </AtButton>
            <AtButton className='btn' size='small' full={false}>
              <image className='postDetails_action_img' src={Comments}/>
            </AtButton>          
            <AtButton className='btn' size='small' full={false}>
              <image className='postDetails_action_img' src={Repost}/>
            </AtButton>          
            <AtButton className='btn' size='small' full={false}>
              <image className='postDetails_action_img' src={Share}/>
            </AtButton>
          </View>
        </View>
        <View className='postDetails-reviewContainer'>
          <Review/>
          <Review/>
        </View>

        <View className='postDetails-footer'>
          <Input className='postDetails-input' placeholder='快加入讨论吧'></Input>
          <View className='postDetails_footer-action'>
            <AtButton className='btn' size='small' full={false}>
              <image className='postDetails_footer-action_img' src={Comments}/>
            </AtButton>
            <AtButton className='btn' size='small' full={false}>
            <image className='postDetails_footer-action_img' src={Star}/>
            </AtButton>
            <AtButton className='btn' size='small' full={false}>
              <image className='postDetails_footer-action_img' src={Share}/>
            </AtButton>
          </View>
        </View>
        <View className='emptySupport'></View>
      </View>
    )
  }
}