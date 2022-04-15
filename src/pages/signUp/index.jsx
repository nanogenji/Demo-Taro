import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Text, Button,Input } from '@tarojs/components'
import './index.scss'
import { AtMessage } from 'taro-ui'
import Bomb from '../../value/bomb'
import user from '../../value/src/lib/user'
let db = new Bomb({sercretKey:"8a7e35df0e10c1ec", apiSafeCode:"000419"});

var Bmob = require('../../value/src/lib/app');
Bmob.initialize("8a7e35df0e10c1ec", "000419");

export default class Index extends Component {
  state={
    userName:'',
    email:'',
    password:'',
    passwordConfirm:'',
    userNameErr:false,
    emailErr:false,
    passwordErr:false,
    passwordConfirmErr:false,
    isPassword:true,
    isPasswordConfirm:true,
    isFinished:false
  }

  handleInputUserName=(value)=>{
    const userName = this.state.userName
    this.setState({
      userName:value.detail.value
    })
    console.log(userName)
  }
  handleInputEmail=(value)=>{
    const email = this.state.email
    this.setState({
      email:value.detail.value
    })
    console.log(email)
  }
  handleInputPassword=(value)=>{
    const password = this.state.password
    this.setState({
      password:value.detail.value
    })
    console.log(password)
  }
  handleInputPasswordConfirm=(value)=>{
    const password = this.state.password
    const passwordConfirm = this.state.passwordConfirm
    this.setState({
      passwordConfirm:value.detail.value
    })
    const passwordConfirmErr = this.state.passwordConfirmErr
    if(passwordConfirm.length !== password){
      this.setState({passwordConfirmErr:true})
    }
    else{
      this.setState({passwordConfirmErr:false})
    }
    // console.log(passwordConfirm)
  }

  //错误提醒
  blurUserName=()=>{
    const userName = this.state.userName
    const userNameErr = this.state.userNameErr
    const isFinished = this.state.isFinished
    var regex = new RegExp("^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]){2,16}$")
    if(regex.test(userName)){
      this.setState({userNameErr:false})
    }else{
      this.setState({userNameErr:true,isFinished:false})
    }
  }
  blurEmail=()=>{
    const email = this.state.email
    const emailErr = this.state.emailErr
    const isFinished = this.state.isFinished
    var regex = new RegExp(`^([a-z0-9A-Z]+[-|\\.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-zA-Z]{2,}$`)
    if(regex.test(email)){
      this.setState({emailErr:false})
    }else{
      this.setState({emailErr:true,isFinished:false})
    }
  }
  blurPassword=()=>{
    const password = this.state.password
    const passwordErr = this.state.passwordErr
    const isFinished = this.state.isFinished
    if(password.length < 6){
      this.setState({passwordErr:true,isFinished:false})
    }
    else{
      this.setState({passwordErr:false})
    }
  }

  blurPasswordConfirm=()=>{
    const password = this.state.password
    const passwordConfirm = this.state.passwordConfirm
    const passwordConfirmErr = this.state.passwordConfirmErr
    const isFinished = this.state.isFinished
    if(passwordConfirm !== password){
      this.setState({passwordConfirmErr:true,isFinished:false})
    }
    else{
      this.setState({passwordConfirmErr:false})
    }
  }

  changePasswordDis=()=>{
    const isPassword = this.state.isPassword
    // const flag = !isPassword
    this.setState({isPassword:!isPassword})
  }
  changePasswordConfirmDis=()=>{
    const isPasswordConfirm = this.state.isPasswordConfirm
    this.setState({isPasswordConfirm:!isPasswordConfirm})
  }

  componentDidUpdate(prevProps, prevState){
    // console.log(this.state.passwordErr)
    // console.log(this.state.passwordConfirmErr)
    var isFinished = this.state.isFinished
    const email = this.state.email
    const password = this.state.password
    const passwordConfirm = this.state.passwordConfirm
    const emailErr = this.state.emailErr
    const passwordErr = this.state.passwordErr
    const passwordConfirmErr = this.state.passwordConfirmErr
    if(email !=='' && password !== '' & passwordConfirm !=='' && emailErr === false && passwordErr === false && passwordConfirmErr === false && prevState.passwordConfirmErr !== this.state.passwordConfirmErr){
      this.setState({isFinished:true})
    }
    console.log(prevState.isFinished)
    console.log(this.state.isFinished)
  }

  checkFinished=()=>{
  }

  signUp=()=>{
    const userName = this.state.userName
    const email = this.state.email
    const password = this.state.password
    console.log(email)
    console.log(password)
    let params = {
      username: userName,
      password: password,
      email: email,
    }
    Bmob.User.register(params).then(res => {
      console.log(res)
      Taro.atMessage({
        'message': '注册成功',
        'type': 'success',
      })
      setTimeout(()=>{
        Taro.navigateBack({
          delta:1
        })
      },800)
      // Taro.navigateBack({
      //   url:'pages/home/index'
      // })
    }).catch(err => {
      console.log(err)
      Taro.atMessage({
        'message': '注册失败，请稍后再试',
        'type': 'error',
      })
    });
  }

  render () {
    const userNameErr = this.state.userNameErr
    const emailErr = this.state.emailErr
    const passwordErr = this.state.passwordErr
    const passwordConfirmErr = this.state.passwordConfirmErr
    const isPassword = this.state.isPassword
    const isPasswordConfirm = this.state.isPasswordConfirm
    const isFinished = this.state.isFinished
    return (
      <View className='signUpContainer'>
        <View className='signUpTitle'>注册</View>

        <View className='InputTip'>
          用户名
        </View>
        <View className='signUpUserName'>
          <Input className='signUpUserNameInput' placeholder='请输入用户名' onInput={this.handleInputUserName.bind(this)} onBlur={this.blurUserName}></Input>
        </View>
        {
          (userNameErr === true) ? <View className='signUpErr'>用户名在2-16个字符之间</View> :<View></View>
        }

        <View className='InputTip'>
          邮箱
        </View>
        <View className='signUpEmail'>
          <Input className='signUpEmailInput' placeholder='请输入邮箱' onInput={this.handleInputEmail.bind(this)} onBlur={this.blurEmail}></Input>
        </View>
        {
          (emailErr === true) ? <View className='signUpErr'>邮箱格式不正确</View> :<View></View>
        }


        <View className='InputTip'>
          密码
        </View>
        <View className='signUpPassword'>
          <Input className='signUpPasswordInput' placeholder='请输入密码' password={isPassword} onInput={this.handleInputPassword.bind(this)} onBlur={this.blurPassword}></Input>
          <View className='at-icon at-icon-eye' onClick={this.changePasswordDis}></View>
        </View>
        {
          (passwordErr === true) ? <View className='signUpErr'>密码至少需要六位数</View> :<View></View>
        }


        <View className='InputTip'>
          确认密码
        </View>
        <View className='signUpPasswordConfirm'>
          <Input className='signUpPasswordConfirmInput' placeholder='请再次确认密码' password={isPasswordConfirm} onInput={this.handleInputPasswordConfirm.bind(this)} onBlur={this.blurPasswordConfirm}></Input>
          <View className='at-icon at-icon-eye' onClick={this.changePasswordConfirmDis}></View>
        </View>
        {
          (passwordConfirmErr === true) ? <View className='signUpErr'>与上一次密码不一致</View> :<View></View>
        }

        <Button disabled={!isFinished} type='primary' className='signUpSub' onClick={this.signUp}>确认注册</Button>
        <AtMessage />
      </View>
    )
  }
}