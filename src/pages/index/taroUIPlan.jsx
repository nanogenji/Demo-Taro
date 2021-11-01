import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text ,Button,Swiper, SwiperItem} from '@tarojs/components'
import './index.css'
import {AtButton , AtTabBar,AtIcon,AtTabs,AtTabsPane,AtAvatar,AtGrid,AtListItem,AtSearchBar,AtCard,AtFab    } from 'taro-ui'
// import Detail from '../detail/index'
import Ava from '../../assets/user.png'
import Collect from '../../assets/collect.png'
import History from '../../assets/history.png'
import Card from '../../assets/card.png'


export default class Index extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }
  handleClick1 (value) {
    this.setState({
      current: value
    })
  }

  onChange (value) {
    this.setState({
      value: value
    })
  }

  onChange2 (event){
    this.setState({
      value: event.target.value
    })
  }
  

  componentWillMount () { }
  componentDidMount () { }
  componentWillUnmount () { }
  componentDidShow () { }
  componentDidHide () { }

  toDetail(){
    Taro.navigateTo({
      url:'/pages/detail/index'
    })
  }

  toSettings(){
    Taro.navigateTo({
      url:'/pages/settings/index'
    })
  }

  toCreatePost(){
    Taro.navigateTo({
      url:'/pages/createPost/index'
    })
  }

  // A(){
  //   Taro.showModal({
  //     title: '提示',
  //     content: '这是一个模态弹窗',
  //     success: function (res) {
  //       if (res.confirm) {
  //         console.log('用户点击确定')
  //       } else if (res.cancel) {
  //         console.log('用户点击取消')
  //       }
  //     }
  //   })
  // }

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
    const tabList = [{ title: '全部订单' }, { title: '已付款' }, { title: '售后' }]
    const tabListPost = [{ title: '想法' }, { title: '文章' }]
    return (
      <View className='index'>
        <AtTabs current={this.state.current} >

          {/* 主页 */}
          <AtTabsPane current={this.state.current} index={0} >
            <View style='width:100%;height:900px;background-color: #fc1944;' >
              {/* <Text className='t1'>首页</Text> */}
              <AtSearchBar
                value={this.state.value}
                onChange={this.onChange.bind(this)}
              />
              <Swiper
                className='test-h'
                indicatorColor='#999'
                indicatorActiveColor='#333'
                vertical={false}
                circular
                indicatorDots
                autoplay>
                <SwiperItem>
                  <View className='ban1'>
                    <image src='../../assets/banner1.png'></image>
                  </View>
                </SwiperItem>
                <SwiperItem>
                  <View className='ban2'>
                  <image src='../../assets/banner2.png'></image>
                  </View>
                </SwiperItem>
                <SwiperItem>
                  <View className='ban3'>
                  <image src='../../assets/banner3.png'></image>
                  </View>
                </SwiperItem>
              </Swiper>
              <View className='homeCategory'>
              <AtGrid columnNum={4} hasBorder={false} data={
                      [
                        {
                          value: '精品推荐'
                        },
                        {
                          value: '名校课程'
                        },
                        {
                          value: '信息技术'
                        },
                        {
                          value: '经济管理'
                        },
                        {
                          value: '职业规划'
                        },
                        {
                          value: '生活技能'
                        },
                        {
                          value: '考证就业'
                        },
                        {
                          value: '全部课程'
                        },
                      ]
                    } />
              <AtCard
                note='课程介绍'
                extra='教师A'
                title='课程1'
                thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
              >
              </AtCard>
              <AtCard className='card'
              note='课程介绍'
              extra='教师B'
              title='课程2'
              thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
            >
              </AtCard>
              </View>
              {/* <Button onClick = {this.A}>我是弹窗</Button>
              <AtButton type='primary' onClick = {this.toDetail}>点击跳转</AtButton> */}
            </View>
          </AtTabsPane>

          {/* 社区 */}
          {/* View高度有问题 */}
          <AtTabsPane current={this.state.current} index={1}>
            <View style='width:100%;height:900px;background-color: #FAFBFC;'>
              {/* 一贴 */}
              <View className="onePost" style="background-color:#ffc107">
                <AtAvatar className='onePost_avatar' circle image={Ava}></AtAvatar>
                <Text className='onePost_name'>Username</Text>
                <Text className='onePost_title'>发表了想法</Text>
                <View className='at-article__p'>
                  这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本落。这是文本段落。1234567890123456789012345678901234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </View>
              </View>
              <View className="onePost" style="background-color:#ffc107">
                <AtAvatar className='onePost_avatar' circle image={Ava}></AtAvatar>
                <Text className='onePost_name'>Username</Text>
                <Text className='onePost_title'>发表了想法</Text>
                <View className='at-article__p'>
                  这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本落。这是文本段落。1234567890123456789012345678901234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </View>
              </View>
              <View className="onePost" style="background-color:#ffc107">
                <AtAvatar className='onePost_avatar' circle image={Ava}></AtAvatar>
                <Text className='onePost_name'>Username</Text>
                <Text className='onePost_title'>发表了想法</Text>
                <View className='at-article__p'>
                  这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本落。这是文本段落。1234567890123456789012345678901234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </View>
              </View>
              <AtFab className="createPost" type='primary' onClick={this.toCreatePost}>
                <AtIcon value='add' color='#fff'></AtIcon>
              </AtFab>
            </View>
          </AtTabsPane>
          {/* 商城 */}
          <AtTabsPane current={this.state.current} index={2}>
            <View style='width:100%;height:900px;background-color: #FAFBFC;'>
            <AtSearchBar
              value2={this.state.value}
              onChange={this.onChange2.bind(this)}
            />
            <AtTabs current={0} tabList={tabList} onClick={this.handleClick1.bind(this)}>
              <AtTabsPane current={this.state.current} index={0} >
                <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >全部订单</View>
              </AtTabsPane>
              <AtTabsPane current={this.state.current} index={1}>
                <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>已付款</View>
              </AtTabsPane>
              <AtTabsPane current={this.state.current} index={2}>
                <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>售后</View>
              </AtTabsPane>
            </AtTabs>
            </View>
            {/* <Detail/> */}
          </AtTabsPane>

          {/* 个人页面 */}
          <AtTabsPane current={this.state.current} index={3}>
            <View style='width:100%;height:900px;background-color: #FAFBFC;'>
              <View className='header'>
                <AtAvatar className='user' circle image={Ava}></AtAvatar>
                <Text className='name'>Username</Text>
                <Text className='email'>A********z@gmail.com</Text>
              </View>
              <AtGrid className='core' mode='rect' hasBorder={false} data={
                [
                    {
                      image: '../../assets/collect.png',
                      value: '收藏夹'
                    },
                    {
                      image: '../../assets/history.png',
                      value: '最近浏览'
                    },
                    {
                      image: '../../assets/card.png',
                      value: '卡券包'
                    }
                  ]
                } />
                <View className='order'>
                  <AtListItem title='我的订单'extraText='查看全部订单' arrow='right' />
                  <AtGrid columnNum={4}  hasBorder={false} data={
                    [
                      {
                        image: '../../assets/card.png',
                        value: '待付款'
                      },
                      {
                        image: '../../assets/history.png',
                        value: '待收货'
                      },
                      {
                        image: '../../assets/card.png',
                        value: '评价'
                      },
                      {
                        image: '../../assets/collect.png',
                        value: '退款/售后'
                      }
                    ]
                  } />
                </View>
                <View className='event'>
                  <AtGrid columnNum={4} mode='rect' hasBorder={false} data={
                      [
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
                      ]
                    } />
                </View>
                <View className='end'>
                  <AtListItem title='关于' onClick = {this.Info} arrow='right' />
                  <AtListItem title='设置' onClick = {this.toSettings} arrow='right' />
                </View>
            </View>
          </AtTabsPane>
          {/* <AtTabsPane current={this.state.current} index={3}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>
              我的
            </View>
          </AtTabsPane> */}
        </AtTabs>


        <AtTabBar
        fixed
        tabList={[
          { title: '主页',iconType:'home'},
          { title: '社区' ,iconType:'tag', text: 8 },
          { title: '商城',iconType:'shopping-cart'},
          { title: '我的',iconType:'settings', dot: true }
        ]}
        onClick={this.handleClick.bind(this)}
        current={this.state.current}
      />
      </View>
      
    )
  }
}
