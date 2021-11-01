import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Text } from '@tarojs/components'
import './index.css'
import { AtAvatar,AtGrid,AtListItem } from 'taro-ui'
import Ava from '../../assets/user.png'


export default class Profile extends Component {

  toSettings(){
    Taro.navigateTo({
      url:'/pages/settings/index'
    })
  }

  Info(){
    Taro.showModal({
      title: '关于',
      content: '作者@cyd\n',
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
      <View >
        <View style='width:100%;height:900px;background-color: #FAFBFC;'>
          <View className='header'>
            <AtAvatar className='user' circle image={Ava}></AtAvatar>
            <Text className='name'>Username</Text>
            <Text className='email'>A********z@gmail.com</Text>
          </View>
          <AtGrid className='core' mode='rect' hasBorder={false} data={gridList} />
            <View className='order'>
              <AtListItem title='我的订单'extraText='查看全部订单' arrow='right' />
              <AtGrid columnNum={4}  hasBorder={false} data={orderActionList} />
            </View>
            <View className='event'>
              <AtGrid columnNum={4} mode='rect' hasBorder={false} data={gridList2} />
            </View>
            <View className='end'>
              <AtListItem title='关于' onClick = {this.Info} arrow='right' />
              <AtListItem title='设置' onClick = {this.toSettings} arrow='right' />
            </View>
        </View>
      </View>
    )
  }
}