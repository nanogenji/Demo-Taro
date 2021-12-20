import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Text, Checkbox, Button, CheckboxGroup } from '@tarojs/components'
import './index.scss'
import { AtSwipeAction,AtButton,AtFloatLayout,AtRadio,AtCheckbox,AtToast,AtIcon  } from 'taro-ui'
import CartItem from '../../components/cartItem'
// import Test from '../../components/test'

export default class Cart extends Component {
  constructor(props){
    super(props)
    this.state = {
      flag:false,
      value: 'option1',
      // pickCount:0,
      total:0,
      toastOpen:false,
      submitDisabled:true,
      checkAlldisable:false,
      cartLists: [
        {id:'001',name:'Taro入门',detail:'入门详情',priceInt:'123',priceFloat:'50',pick:false},
        {id:'002',name:'Taro实战',detail:'实战详情',priceInt:'321',priceFloat:'99',pick:false},
        {id:'003',name:'Taro放弃',detail:'忘了我吧',priceInt:'0',priceFloat:'01',pick:false},
      ]
    }
    this.addressChange = this.addressChange.bind(this)
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
  onSub =()=>{
    const total = this.state.total
    // const cartLists = this.state.cartLists
    // const 
    // const newCartLists = cartLists.map((cartListObj)=>{
    //   if(cartListObj.pick === true){
    //   }
    // })
    // console.log('提交成功,本次订单共：' + total / 100 + '元')
    // return <AtToast isOpened text={'提交成功,本次订单共：' + total / 100 + '元'} status={"success"} ></AtToast>
    const toastOpen = this.state.toastOpen
    this.setState({toastOpen:!toastOpen})
  }

  //地址
  handleChange (value) {
    const flag = this.state.flag
    this.setState({
      value,
      flag:false
    })
  }

  deleteCartItem =(id)=>{
    const cartLists = this.state.cartLists
    const checkAlldisable = this.state.checkAlldisable
    let newCheckAlldisable = true
    let cartListLength = cartLists.length
    const newCartLists = cartLists.filter((cartListObj)=>{
      return cartListObj.id !== id
    })
    //调用完length才为0
    if(cartListLength === 1){
      newCheckAlldisable = true
    }
    else{
      newCheckAlldisable = false
    }
    console.log(newCheckAlldisable)
    this.setState({cartLists:newCartLists,checkAlldisable:newCheckAlldisable})
  }

  // addCartItem = (cartListObj) =>{
  //   const cartLists = this.state.cartLists
  //   const newCartLists = [cartListObj,...cartLists]
  //   this.setState({cartLists:newCartLists})
  // }

  // updateCartItem = (id,pick)=>{
  //   const cartLists = this.state.cartLists
  //   const newCartLists = cartLists.map((cartListObj)=>{
  //     if(cartListObj.id === id) return {...cartListObj,pick:pick}
  //     else return cartListObj
  //   })
  //   this.setState({cartLists:newCartLists})
  // }

  //新update
  updateCartItem = (id,pick)=>{
    const cartLists = this.state.cartLists
    const total = this.state.total
    const submitDisabled = this.state.submitDisabled
    let totalInt = 0
    let totalFloat = 0
    let temp = 0
    let newSubmitDisabled = true
    //update
    const newCartLists = cartLists.map((cartListObj)=>{
      if(cartListObj.id === id) return {...cartListObj,pick:pick}
      else return cartListObj
    })
    //total
    newCartLists.map((newCartListObj)=>{
      if(newCartListObj.pick === true){
        newSubmitDisabled = false
        totalInt += parseInt(newCartListObj.priceInt)
        totalFloat += parseInt(newCartListObj.priceFloat)
      }
    })
    if(totalFloat >= 100){
      let carry = totalFloat
      totalFloat -= 100 * parseInt(carry / 100)
      totalInt += parseInt(carry / 100)
      // console.log('carry:'+parseInt(carry / 100))
      // console.log('totalInt'+totalInt)
      // console.log('totalFloat' + totalFloat)
    }
    temp = parseInt('' + totalInt + (totalFloat === 0 ? '00' : totalFloat))//totalFloat为0时补一位
    //submitdisable
    console.log(newSubmitDisabled)

    //checkdisable
    this.setState({total:temp,cartLists:newCartLists,submitDisabled:newSubmitDisabled})
  }

  checkAll = (event)=>{
    let flag = false
    const total = this.state.total
    let totalInt = 0
    let totalFloat = 0
    let temp = 0
    const cartLists = this.state.cartLists
    const submitDisabled = this.state.submitDisabled
    let newSubmitDisabled = true
    if(event.detail.value.length === 1){
      flag = true
      newSubmitDisabled = false
    }
    else flag = false
    const newCartLists = cartLists.map((cartListObj)=>{
      return {...cartListObj,pick:flag}
    })

    //
    newCartLists.map((newCartListObj)=>{
      if(newCartListObj.pick === true){
        totalInt += parseInt(newCartListObj.priceInt)
        totalFloat += parseInt(newCartListObj.priceFloat)
      }
    })
    if(totalFloat >= 100){
      let carry = totalFloat
      totalFloat -= 100 * parseInt(carry / 100)
      totalInt += parseInt(carry / 100)
      // console.log('carry:'+parseInt(carry / 100))
      // console.log('totalInt'+totalInt)
    }
    temp = parseInt('' + totalInt + totalFloat)
    this.setState({total:temp,cartLists:newCartLists,submitDisabled:newSubmitDisabled})
    console.log('全选判定'+event.detail.value.length)
  }
  
  onToastClosed = () =>{
    const toastOpen = this.state.toastOpen
    this.setState({toastOpen:false})
  }
  //全选禁用
  // checkAlldisable = ()=>{
  //   let flag = 0
  //   const cartLists = this.state.cartLists
  //   cartLists.map((cartListObj)=>{
  //     if(cartListObj.pick === true)
  //     {
  //       flag += 1
  //     }
  //     return flag === 0 ? true : false
  //   })
  // }


  // totalprice = ()=>{
  //   const cartLists = this.state.cartLists
  //   let totalInt = 0
  //   let totalFloat = 0
  //   const total = this.state.total
  //   let temp = 0
  //   cartLists.map((cartListObj)=>{
  //     if(cartListObj.pick === true){
  //       totalInt += parseInt(cartListObj.priceInt)
  //       totalFloat += parseInt(cartListObj.priceFloat)
  //     }
  //   })
  //   if(totalFloat >= 100){
  //     totalFloat -= 100 * (totalFloat / 100)
  //     totalInt += (totalFloat / 100)
  //   }
  //   temp = parseInt('' + totalInt + totalFloat)
  //   this.setState({total:temp})
  // }

  //submitdisabled
  // componentDidUpdate = ()=>{
  //   const submitDisabled = this.state.submitDisabled
  //   const cartLists = this.state.cartLists
  //   let newSubmitDisabled = true
  //   cartLists.map((cartListObj)=>{
  //     if(cartListObj.pick === true){
  //       newSubmitDisabled = false
  //       // this.setState({submitDisabled:newSubmitDisabled})
  //     }
  //   })
  //   // console.log(newSubmitDisabled)
  // }

  componentDidMount=()=>{
    const checkAlldisable = this.state.checkAlldisable
    const cartLists = this.state.cartLists
    let newCheckAlldisable = false
    let cartListLength = cartLists.length
    if(cartListLength === 0){
      newCheckAlldisable = true
    }
    else{
      newCheckAlldisable = false
    }
    this.setState({checkAlldisable:newCheckAlldisable})
  }
  
  render () {
    const flag = this.state.flag
    const cartLists = this.state.cartLists
    const total = this.state.total
    const toastOpen = this.state.toastOpen
    const submitDisabled = this.state.submitDisabled
    const checkAlldisable = this.state.checkAlldisable
    // cosnt pickCount = cartLists.reduce((pre,current)=>{return pre + (current.pick ? 1:0)},0)
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
      <View>
        <View className='cart-header'>
          <AtButton circle size='small' type='primary' className='addressBtn' onClick={this.addressChange}>选择配送地址</AtButton>
        </View>
        <View className='cart-content'>
          {
            cartLists.map((cartList) => {
              // return <AtSwipeAction onClick={this.del} maxDistance={120} areaWidth={375} options={btnActionList}>
              //     <CartItem cartList = {cartList} />
              //   </AtSwipeAction>
              return <CartItem cartList = {cartList} deleteCartItem={this.deleteCartItem} updateCartItem={this.updateCartItem} totalprice={this.totalprice}/>
            })
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
          price={total}
          buttonText='提交订单'
          onSubmit={this.onSub.bind(this)}
          disabled={submitDisabled}
        >
          <CheckboxGroup onChange={this.checkAll}>
            <Checkbox 
                checked={(cartLists.reduce((pre,current)=>{ return pre + (current.pick ? 1:0)},0) === cartLists.length && cartLists.length !== 0) ? true:false}
                disabled={checkAlldisable}
            >
            </Checkbox>
          </CheckboxGroup>
          <Text>已选{cartLists.reduce((pre,current)=>{return pre + (current.pick ? 1:0)},0)}/总共{cartLists.length}</Text>
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
      <AtToast isOpened={toastOpen} text={'提交成功,本次订单共：' + total / 100 + '元'} duration={1000} status={"success"} onClose={this.onToastClosed} ></AtToast>
      </View>
    )
  }
}