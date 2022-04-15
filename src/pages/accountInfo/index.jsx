import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Text, ScrollView } from '@tarojs/components'
import './index.scss'
import { AtButton,AtMessage } from 'taro-ui'
import List from '../../components/list'
import Bomb from '../../value/bomb'
let db = new Bomb({sercretKey:"8a7e35df0e10c1ec", apiSafeCode:"000419"});

var Bmob = require('../../value/src/lib/app');
Bmob.initialize("8a7e35df0e10c1ec", "000419");

export default class AccountInfo extends Component {
  state={
    userInfo:[],
    userId:[]
  }
  componentWillMount(){
    const userId = this.state.userId
    var temp = ''
    // Taro.getStorage({
    //   key:'bmob',
    //   success: function(res){
    //     // console.log(res.data.indexOf('objectId'))
    //     // console.log(res.data.slice(res.data,res.data.indexOf('objectId')+21))
    //     // userStorage += res.data
    //     // this.setState({userId:"55"})
    //     userStorage = res
    //     console.log(userStorage)
    //   },
    //   fail:function(){
    //     Taro.navigateTo({
    //       url:'/pages/login/index'
    //     })
    //   }
    // })
    temp = Taro.getStorageSync('bmob')
    // console.log(temp.slice(temp.indexOf('objectId')+11,temp.indexOf('objectId')+21))
    this.setState({userId:temp.slice(temp.indexOf('objectId')+11,temp.indexOf('objectId')+21)})
  }

  componentDidMount(){
    const userId = this.state.userId
    const userInfo = this.state.userInfo
    const query = Bmob.Query('_User');
    query.get(userId).then(res => {
      this.setState({userInfo:res})
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  logout(){
    Bmob.User.logout()
    Taro.atMessage({
      'message': '您已退出登录',
      'type': 'error',
    })
    setTimeout((function(){
      Taro.navigateBack({
        delta:1
      })
    }),800)
  }
  render () {
    const userInfo = this.state.userInfo
    return (
      <View className='bd'>
        <View className='infoTitle'>用户名</View>
        <ScrollView className='infoContainer'>
          <List name={userInfo.username} value={userInfo.objectId} />
        </ScrollView>
        <View className='infoTitle'>账户信息</View>
        <ScrollView className='infoContainer'>
          <List name='注册时间' value={userInfo.createdAt} />
          <List name='邮箱' value={userInfo.email} />
          <List name='手机号' value={userInfo.phone} />
          <List name='个性签名' value={userInfo.sign} />
        </ScrollView>
      <AtButton className='logout' circl={true} onClick={this.logout}>退出账号</AtButton>
      <AtMessage/>
      </View>
    )
  }
}