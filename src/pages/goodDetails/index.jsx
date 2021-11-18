import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Text,Image } from '@tarojs/components'
import './index.scss'
import { AtAvatar,AtTabs, AtTabsPane,AtToast,AtAccordion,AtList,AtListItem } from 'taro-ui'
import Ava from '../../assets/user.png'

export default class GoodDetails extends Component {
  constructor (props) {
    super(props)
    this.state = {
      current: 0,
      flag:false,
      open: true,
    }
    this.openToast = this.openToast.bind(this)
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }

  handleClick2 (value) {
    this.setState({
      open: value
    })
  }


  openToast(){
    const flag = this.state.flag
    this.setState({flag:true})
  }
  addCartBtn(){
    console.log('加入购物车成功')
  }
  buyBtn(){
    console.log('立即购买')
  }
  toCart(){
    Taro.navigateTo({
      url:'/pages/cart/index'
    })
    // let date = Date.now();
    // let rund = Math.ceil(Math.random()*1000)
    // const cartListObj = {id:date + '' + rund,name:'Taro文档',detail:'',priceInt:'100',priceFloat:'00'}
    // this.props.add(cartListObj)
  }
  render () {
    const flag = this.state.flag
    const tabList = [{ title: '介绍' }, { title: '目录' }, { title: '评价' }]
    const open = this.state.open
    return (
      <View className='goodDetails-container'>
        <Image className='goodDetails-img'/>
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
        <AtTabsPane current={this.state.current} index={0} >
          <View className='goodDetails-intro'>
            <View className='goodDetails-header'>
              <Text className='goodDetails-header-title'>Taro文档</Text>
              <Text className='goodDetails-header-student'>已有xxx人参加</Text>
              <Text className='goodDetails-header-time'>2021年10月01日-2021年11月30日</Text>
              <Text className='goodDetails-header-price'>￥100.00</Text>
            </View>
            <View className='goodDetails-author'>
              <Text className='goodDetails-author-header'>授课教师</Text>
              <View className='goodDetails-author-content'>
                <AtAvatar circle image={Ava} className='goodDetails-author-icon'/>
                <View className='goodDetails-author-info'>
                  <Text className='goodDetails-author-name'>A老师</Text>
                  <Text className='goodDetails-author-title'>20年专业解读文档</Text>
                </View>
              </View>
          </View>
          </View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={1}>
          <View className='goodDetails-directory'>
            <AtAccordion
              open={this.state.open}
              onClick={this.handleClick2.bind(this)}
              title='基础教程'
              className='goodDetails-directory-accordion'
            >
              <AtList hasBorder={false}>
                <AtListItem
                  title='目录结构'
                  arrow='right'
                  thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                />
                <AtListItem
                  title='配置'
                  note='编译配置、设计稿及尺寸单位、全局配置、页面配置、项目配置、Babel配置'
                  arrow='right'
                  thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
                />
                <AtListItem
                  title='路由功能'
                  note='本篇将介绍如何在 Taro 中配置路由、实现路由跳转和传参等方法。'
                  extraText='详细信息'
                  arrow='right'
                  thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
                />
              </AtList>
            </AtAccordion>
          </View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={2}>
          <View className='goodDetails-reviews'>还没有人评价该课程</View>
        </AtTabsPane>
      </AtTabs>

      {/* <View className='goodDetails-footer'>
        <AtIcon className='goodDetails-footer-icon' value='heart' size='30' color='#dedede'></AtIcon>
        <View className='goodDetails-footer-btn'>
          <AtButton circle type='primary' className='goodDetails-footer-tocartBtn' onClick={this.openToast}>加入购物车</AtButton>
          <AtButton circle type='primary' className='goodDetails-footer-buyBtn' onClick={this.openToast}>立即参加</AtButton>
        </View>
      </View> */}

      <van-goods-action>
        <van-goods-action-icon icon="like-o" text="收藏" onClick="onClickIcon" />
        <van-goods-action-icon icon="cart-o" text="购物车" onClick={this.toCart} />
        <van-goods-action-button
          text="加入购物车"
          type="warning"
          onClick={this.addCartBtn.bind(this)}
          color='#79d2d2'
        />
        <van-goods-action-button text="立即购买" color='#f44336' onClick={this.buyBtn.bind(this)} />
    </van-goods-action>

      <AtToast isOpened={flag} text="添加成功" icon='{check}' duration={1000}></AtToast>
      </View>
    )
  }
}