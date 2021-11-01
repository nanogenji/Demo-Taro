import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Text,Image,Checkbox,Button } from '@tarojs/components'
// import './index.css'
// import './FloatLayout.scss'
import './index.scss'
import { AtSwipeAction, AtCheckbox,AtInputNumber,AtFloatLayout, AtButton,AtTag  } from 'taro-ui'
import thisisgood from '../../assets/thisisgood.jpg'
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

  onClick(name){
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

  render () {
    const flag = this.state.flag
    const isPick = this.state.isPick
    const btnActionList=[
      {
        text: '加入\n收藏',
        style: {
          backgroundColor: '#6190E8'
        }
      },
    {
      text: '删除',
      style: {
        backgroundColor: '#FF4949'
      }
    }
  ]
    return (
      <View style={'height:100%'}>
        {/* <Image 
        style='height:170px;width:100%;'
        src={thisisgood}
        /> */}
      <AtSwipeAction maxDistance={120} areaWidth={375} options={btnActionList}>
          <View className='good-container'>
            <Checkbox style={'margin-left:14px'}></Checkbox>
              <Image className='img' onClick={this.toGoodDetails}/>
              <View className='item-info'>
                <Text className='item-name'>商品名称</Text>
                <Text className='item-text'>商品描述</Text>
                <AtButton className='item-type' size='small' onClick={this.typeInfo}>选择种类</AtButton>
                <View className='item-info-bottom'>
                  <Text className='item-price'>
                    <Text className='item-price-currency'>￥</Text>
                    <Text className='item-price-integer'>100</Text>
                    <Text className='item-price-float'>.00</Text>
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