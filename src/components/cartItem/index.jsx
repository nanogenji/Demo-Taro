import { Component } from 'react'
import Taro from '@tarojs/taro'
import ReactDOM from 'react-dom'
import { View,Text,Image,Checkbox,Button } from '@tarojs/components'
// import './index.css'
// import './FloatLayout.scss'
import './index.scss'
import { AtSwipeAction, AtCheckbox,AtInputNumber,AtFloatLayout, AtButton,AtTag  } from 'taro-ui'
import Bomb from '../../value/bomb'
let db = new Bomb({sercretKey:"8a7e35df0e10c1ec", apiSafeCode:"000419"});

var Bmob = require('../../value/src/lib/app');
Bmob.initialize("8a7e35df0e10c1ec", "000419");

export default class CartItem extends Component {
  constructor (props){
    super(props)
    this.state = {
      flag:false,
      isPick:true,
      value: 1
    }
    this.typeInfo = this.typeInfo.bind(this)
  }
  handleClose(){
    const flag = this.state.flag
    this.setState({flag:false})
  }

  typeInfo(){
    const flag = this.state.flag
    this.setState({flag:true})
    console.log("flag:",flag)
  }

  onClick(){
    const isPick = this.state.isPick
    this.setState({isPick:!isPick})
    console.log(isPick)
  }
  handleChange(value){
    this.setState({
      value
    })
  }
  toGoodDetails(){
    Taro.navigateTo({
      url:'/pages/goodDetails/index'
    })
  }

  handleDelete = (id,objectId)=>{
    const query = Bmob.Query('cartlist');
    this.props.deleteCartItem(id)
    query.destroy(objectId).then(res =>{
      console.log(res)
    }).catch(err =>{
      console.log(err)
    })
  }

  handleCheck = (id)=>{
    const {cartList} = this.props
    const pick = !cartList.pick
    return(event)=>[
      this.props.updateCartItem(id,pick),
      // this.props.totalprice()
    ]
  }


  render () {
    const flag = this.state.flag
    const isPick = this.state.isPick
    const {cartList} = this.props
    const radio = '0'
    const btnActionList=[
      {
        id:1,
        text: '加入\n收藏',
        style: {
          backgroundColor: '#6190E8'
        }
      },
    {
      id:2,
      text: '删除',
      style: {
        backgroundColor: '#FF4949'
      }
    }
  ]
    return (
      <View style={'height:100%'}>
      <AtSwipeAction onClick={()=>this.handleDelete(cartList.id,cartList.objectId)} maxDistance={120} areaWidth={375} options={btnActionList}>
          <View className='good-container'>
            <Checkbox style={'margin-left:14px'} checked={cartList.pick} onClick={this.handleCheck(cartList.id)}></Checkbox>
              {/* 是否选中:{cartList.pick+''} */}
              <Image className='img' onClick={this.toGoodDetails}/>
              <View className='item-info'>
                <Text className='item-name'>{cartList.name}</Text>
                <Text className='item-text'>{cartList.detail} </Text>
                <AtButton className='item-type' size='small' onClick={this.typeInfo}>选择种类</AtButton>
                <View className='item-info-bottom'>
                  <Text className='item-price'>
                    <Text className='item-price-currency'>￥</Text>
                    <Text className='item-price-integer'>{cartList.priceInt}</Text>
                    <Text className='item-price-float'>.{cartList.priceFloat}</Text>
                  </Text>
                  <AtInputNumber
                    min={0}
                    max={10}
                    step={1}
                    value={this.state.value}
                    onChange={this.handleChange.bind(this)}
                  />
                </View>
            </View>
          </View>
      </AtSwipeAction>

      <AtFloatLayout isOpened={flag} onClose={this.handleClose.bind(this)}>
        <View className='fLayout'>
          <View className='layout-head'>
            <Image className='img'/>
            <View className='layout-header-right'>
              <Text className='item-price'>￥xxx元</Text>
              <Text className='item-name'>选择商品种类</Text>
            </View>
          </View>
          <View className='layout-content'>
            <Text>种类：</Text>
            <View className='tagGroup'>
              <AtTag className='Tagstyle' name='tag-1' active={isPick} circle onClick={this.onClick.bind(this)}>种类1</AtTag>
              <AtTag className='Tagstyle' name='tag-2' circle>种类2</AtTag>
              <AtTag className='Tagstyle' name='tag-3' circle>种类3</AtTag>
            </View>
            <View className='tagGroup'>
              <AtTag className='Tagstyle' name='tag-4' circle>种类4</AtTag>
              <AtTag className='Tagstyle' name='tag-5' circle>种类5</AtTag>
              <AtTag className='Tagstyle' name='tag-6' circle>种类6</AtTag>
            </View>



          </View>
          <AtButton type='primary' size='normal' circle className='layout-confirm' onClick={this.handleClose.bind(this)}>确认</AtButton>
        </View>
      </AtFloatLayout>
    </View>
    )
  }
}