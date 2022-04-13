import { Component } from 'react'
import Taro,{ getCurrentInstance,Current } from '@tarojs/taro'
import { View,Text,Image, ScrollView } from '@tarojs/components'
import './index.scss'
import { AtAvatar,AtTabs, AtTabsPane,AtToast,AtAccordion,AtList,AtListItem } from 'taro-ui'
import Ava from '../../assets/user.png'
import Bomb from '../../value/bomb'
let db = new Bomb({sercretKey:"8a7e35df0e10c1ec", apiSafeCode:"000419"});

var Bmob = require('../../value/src/lib/app');
Bmob.initialize("8a7e35df0e10c1ec", "000419");

export default class GoodDetails extends Component {
  $instance = getCurrentInstance()
  constructor (props) {
    super(props)
    this.state = {
      current: 0,
      flag:false,
      open: true,
      courseList:[],
      startTime:'',
      isCartToast:false
    }
    // this.openToast = this.openToast.bind(this)
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


  // openToast(){
  //   const flag = this.state.flag
  //   this.setState({flag:true})
  // }
  addCartBtn(course){
    const isCartToast = this.state.isCartToast
    const query = Bmob.Query('cartlist');
    query.set("priceInt",course.priceInt)
    query.set("priceFloat",course.priceFloat)
    query.set("name",course.title)
    query.set("detail",course.salerDetail)
    query.set("label",course.salerDetail)
    query.save().then(res => {
      console.log(res)
      console.log('加入购物车成功')
    console.log('加入购物车成功')
      this.setState({isCartToast:true})
    }).catch(err => {
      console.log(err)
    })
    // console.log(course.objectId)
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

  //无后端
  // componentDidMount(){
  //   const courseList = JSON.parse(decodeURI(Current.router.params.courseList))
  //   console.log(courseList)
  // }

  componentWillMount(){
    const id = Current.router.params.id
    db.get_('goods',id).then((value) => {
      this.setState({courseList:value})
  })
  }

  //截取ymd
  getDate=(date)=>{
    var ans = ''
    if(date !== undefined){
      var a = date.indexOf(' ')
      ans = date.slice(0,a)
    }
    return ans
  }
  
  render () {
    const tabList = [{ title: '介绍' }, { title: '目录' }, { title: '评价' }]
    // const courseList = JSON.parse(decodeURI(Current.router.params.courseList))
    const courseList = this.state.courseList
    const startTime = this.getDate(courseList.createdAt)
    const endTime = this.getDate(courseList.updatedAt)
    const isCartToast = this.state.isCartToast
    return (
      <View enableFlex={true} className='goodDetails-container'>
        <Image className='goodDetails-img'/>
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
        <AtTabsPane current={this.state.current} index={0} >
          <ScrollView enableFlex={true} className='goodDetails-intro'>
            <View className='goodDetails-header'>
              <Text className='goodDetails-header-title'>{courseList.title}</Text>
              <Text className='goodDetails-header-student'>{'已有'+ courseList.student +'人参加'}</Text>
              <Text className='goodDetails-header-time'>{startTime}-{endTime}</Text>
              <Text className='goodDetails-header-price'>
                <Text className='goodDetails-header-price-currency'>￥</Text>
                <Text className='goodDetails-header-price-integer'>{courseList.priceInt}</Text>
                <Text className='goodDetails-header-price-float'>.{courseList.priceFloat}</Text>
              </Text>
            </View>
            <View className='goodDetails-author'>
              <Text className='goodDetails-author-header'>授课方</Text>
              <View className='goodDetails-author-content'>
                <AtAvatar circle image={Ava} className='goodDetails-author-icon'/>
                <View className='goodDetails-author-info'>
                  <Text className='goodDetails-author-name'>{courseList.producer}</Text>
                  {/* <Text className='goodDetails-author-title'>20年专业解读文档</Text> */}
                  <Text className='goodDetails-author-title'>{courseList.salerDetail}</Text>
                </View>
              </View>
            </View>
          </ScrollView>
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
      <View className='emptyView'></View>
      <van-goods-action>
        <van-goods-action-icon icon="like-o" text="收藏" onClick="onClickIcon" />
        <van-goods-action-icon icon="cart-o" text="购物车" onClick={this.toCart} />
        <van-goods-action-button
          text="加入购物车"
          type="warning"
          onClick={this.addCartBtn.bind(this,courseList)}
          color='#79d2d2'
        />
        <van-goods-action-button text="立即购买" color='#f44336' onClick={this.buyBtn.bind(this)} />
    </van-goods-action>

      <AtToast isOpened={isCartToast} text="添加成功" icon='check' duration={1000}></AtToast>
      </View>
    )
  }
}