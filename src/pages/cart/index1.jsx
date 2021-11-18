import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Text, Checkbox } from '@tarojs/components'
import './index.scss'
import { AtButton,AtFloatLayout,AtRadio,AtCheckbox  } from 'taro-ui'
import CartItem from '../../components/cartItem'
import Test from '../../components/test'

export default class Cart extends Component {
  constructor(props){
    super(props)
    this.state = {
      flag:false,
      value: 'option1'
    }
    this.addressChange = this.addressChange.bind(this)
    // 多选框
  //   this.checkboxOption = [{
  //     value: 'list1',
  //     label: 'iPhone X',
  //     desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。'
  //   },{
  //     value: 'list2',
  //     label: 'HUAWEI P20'
  //   },{
  //     value: 'list3',
  //     label: 'OPPO Find X',
  //     desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
  //     disabled: true
  //   },{
  //     value: 'list4',
  //     label: 'vivo NEX',
  //     desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
  //     disabled: true
  // }]
  }
  handleClose(){
    const flag = this.state.flag
    this.setState({flag:false})
  }

  addressChange(){
    const flag = this.state.flag
    this.setState({flag:true})
    console.log("cart-flag:",flag)
  }
  onSub(){
    console.log('提交成功')
  }
  //地址
  handleChange (value) {
    const flag = this.state.flag
    this.setState({
      value,
      flag:false
    })
  }


  render () {
    const flag = this.state.flag
    return (
      <View>
        <View className='cart-header'>
          <AtButton circle size='small' type='primary' className='addressBtn' onClick={this.addressChange}>选择配送地址</AtButton>
        </View>
        <View className='cart-content'>
          {
            [...new Array(6)].map(() => (<CartItem />))
          }
        </View>
        {/* <View className='cart-footer'>
          <View>
            <Checkbox style={'margin-left:14px'}></Checkbox>
            <Text className='totalprice'>总计：xxx元</Text>
          </View>
          <AtButton circle type='primary' className='cart-confirm'>去结算</AtButton>
        </View> */}
        <van-submit-bar
          price={ 3050 }
          buttonText='提交订单'
          onSubmit={this.onSub.bind(this)}
        >
          <Checkbox></Checkbox>
        </van-submit-bar>
        <View className='emptySupport'></View>
        {/* <Test/> */}

        {/* FloatLayout */}
        <AtFloatLayout isOpened={flag} onClose={this.handleClose.bind(this)}>
          <View className='addressLayout'>
            <View className='layout-head'>
              <Text className='head-font'>配送至</Text>
            </View>
            <View className='layout-content'>
            <AtRadio className='address' onClick={this.handleChange.bind(this)} //缺少函数
              options={[
                { label: '广东省珠海市香洲区唐家湾镇北京师范大学珠海校区', value: 'option1'},
                { label: '广东省珠海市香洲区唐家湾镇北京师范大学珠海校区', value: 'option2' },
                { label: '广东省珠海市香洲区唐家湾镇北京师范大学珠海校区', value: 'option3'}
              ]}
              value={this.state.value}
            />
            {/* 多选框 */}
            {/* <AtCheckbox
              options={this.checkboxOption}
            /> */}
            </View>
            <AtButton type='primary' size='normal' circle className='layout-confirm' onClick={this.handleClose.bind(this)}>确认</AtButton>
          </View>
      </AtFloatLayout>
      </View>
    )
  }
}