import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Text } from '@tarojs/components'
import './index.scss'
import { AtAvatar,AtGrid,AtListItem } from 'taro-ui'
import Ava from '../../assets/user.png'
import Bomb from '../../value/bomb'
let db = new Bomb({sercretKey:"8a7e35df0e10c1ec", apiSafeCode:"000419"});

export default class Profile extends Component {
  state={
    userInfo:[]
  }
  componentWillMount(){
    db.get_('user','WGZS333L').then((value) =>{
      this.setState({userInfo:value})
    })
  }
  toSettings(){
    Taro.navigateTo({
      url:'/pages/accountInfo/index'
    })
  }
  toProfessionTest(){
    Taro.navigateTo({
      url:'/pages/professionTest/index'
    })
  }
  toFeedback(){
    Taro.navigateTo({
      url:'/pages/feedback/index'
    })
  }

  toOrderList(){
    Taro.navigateTo({
      url:'/pages/orderList/index'
    })
  }

  Info(){
    Taro.showModal({
      title: '关于',
      content: '作者：前端@cyd\n后端@xjh',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }

  render () {
    const userInfo = this.state.userInfo
    const gridList = [
      {
        image: require('../../assets/collect.png'),
        value: '收藏夹'
      },
      {
        image: require('../../assets/history.png'),
        value: '最近浏览'
      },
      {
        image: require('../../assets/card.png'),
        value: '卡券包'
      }
    ];
    const orderActionList = [
      {
        image: require('../../assets/pay.png'),
        value: '待付款'
      },
      {
        image: require('../../assets/send.png'),
        value: '待收货'
      },
      {
        image: require('../../assets/review.png'),
        value: '评价'
      },
      {
        image: require('../../assets/turn.png'),
        value: '退款/售后'
      }
    ];
    const gridList2 = [
      {
        value: '学习进度'
      },
      {
        value: '我的书架'
      },
      {
        value: '我的回复'
      },
      {
        value: '付费咨询'
      },
      {
        value: '活动广场'
      },
      {
        value: '社区建设'
      },
      {
        value: '读书会'
      },
      {
        value: '反馈与帮助'
      },
    ];
    return (
        <View>
          <View className='header'>
            <AtAvatar className='userAva' circle image={Ava}></AtAvatar>
            <View className='user-info'>
              <Text className='name'>{userInfo.userName}</Text>
              <Text className='email'>{userInfo.email}</Text>
            </View>
          </View>
          <AtGrid className='core' mode='rect' hasBorder={false} data={gridList} />
            <View className='order'>
              <AtListItem title='我的订单'extraText='查看全部订单' arrow='right' onClick={this.toOrderList} />
              <AtGrid className='order-action' columnNum={4}  hasBorder={false} data={orderActionList} />
            </View>
            {/* <View className='event'>
              <AtGrid columnNum={4} mode='rect' hasBorder={false} data={gridList2} />
            </View> */}
            <View className='end'>
              <AtListItem hasBorder={false} iconInfo={{size:25,value:'calendar',color:'#90a4ae'}} title='学习进度' onClick = {this.Info} arrow='right' />
              <AtListItem hasBorder={false} iconInfo={{size:25,value:'eye',color:'#90a4ae'}} title='职业测试' onClick = {this.toProfessionTest} arrow='right' />
              <AtListItem hasBorder={false} iconInfo={{size:25,value:'help',color:'#90a4ae'}} title='帮助与反馈' onClick = {this.toFeedback} arrow='right' />
              <AtListItem hasBorder={false} iconInfo={{size:25,value:'menu',color:'#90a4ae'}} title='关于' onClick = {this.Info} arrow='right' />
              <AtListItem hasBorder={false} iconInfo={{size:25,value:'settings',color:'#90a4ae'}} title='设置' onClick = {this.toSettings} arrow='right' />
            </View>
        </View>
    )
  }
}