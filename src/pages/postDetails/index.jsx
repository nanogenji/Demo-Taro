import { Component } from 'react'
import Taro, { Current, getCurrentInstance } from '@tarojs/taro'
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

var Bmob = require('../../value/src/lib/app');
Bmob.initialize("8a7e35df0e10c1ec", "000419");

export default class postDetails extends Component {
  $instance = getCurrentInstance()
  state = {
    postList:[]
  }
  // componentDidMount=()=>{
  //   console.log(this.$router.params.id)
  // }

  touserCard=(userId)=>{
    Taro.navigateTo({
      url:`../../pagesA/userCard/index?userId=${userId}`
    })
  }

  componentWillMount(){
    const id = Current.router.params.id
    console.log(id)
    const query = Bmob.Query('content');
    query.equalTo("objectId", "==", id);
    query.find().then(res => {
    //   console.log(res[0])
    this.setState({postList:res[0]})
    });
  }

  render () {
    // const postList = JSON.parse(decodeURI(Current.router.params.postList))
    const postList = this.state.postList
    return (
      <View className='postDetails-bg'>
        <View className='postDetails-container'>
          <View className='postDetails-user' onClick={this.touserCard.bind(this,postList.user)}>
            <AtAvatar className='postDetails_avatar' circle image={Ava}/>
            <View className='postDetails-user-info'>
              <Text className='postDetails_name'>{postList.userName}</Text>
              <Text className='postDetails_title'>{postList.updatedAt + '发表了想法'}</Text>
            </View>
          </View>
          <View className='postDetails-content'>
            <Text>{postList.mainContent}</Text>
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