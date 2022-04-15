import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Text,Checkbox } from '@tarojs/components'
import './index.scss'
import { AtInput, AtButton, AtForm,AtMessage } from 'taro-ui'
import Bomb from '../../value/bomb'
let db = new Bomb({sercretKey:"8a7e35df0e10c1ec", apiSafeCode:"000419"});

var Bmob = require('../../value/src/lib/app');
Bmob.initialize("8a7e35df0e10c1ec", "000419");

export default class Login extends Component {
  state={
    email:'',
    password:'',
    emailErr:false,
    isFinished:false,
    isPassword:'password'
  }
  handleChangeEmail=(value)=>{
    const email = this.state.email
    console.log(value)
    this.setState({email:value})
  }

  handleChangePassword=(value)=>{
    const password = this.state.password
    console.log(value)
    this.setState({password:value})

    const emailErr = this.state.emailErr
    const isFinished = this.state.isFinished
    if(emailErr !== true && password.length > 4){
      this.setState({isFinished:true})
    }
    else{
      this.setState({isFinished:false})
    }
  }
  toSignUp(){
    Taro.navigateTo({
      url:'/pages/signUp/index'
    })
  }

  blurEmail=()=>{
    const email = this.state.email
    const emailErr = this.state.emailErr
    var regex = new RegExp(`^([a-z0-9A-Z]+[-|\\.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-zA-Z]{2,}$`)
    if(regex.test(email)){
      this.setState({emailErr:false})
    }else{
      this.setState({emailErr:true})
    }
  }
  blurPassword=()=>{
    const emailErr = this.state.emailErr
    const password = this.state.password
    const isFinished = this.state.isFinished
    if(emailErr !== true && password.length > 0){
      this.setState({isFinished:true})
    }
    else{
      this.setState({isFinished:false})
    }
  }
  changePasswordDis=()=>{
    const isPassword = this.state.isPassword
    if(isPassword === 'password'){
      this.setState({isPassword:'text'})
    }
    else if(isPassword === 'text'){
      this.setState({isPassword:'password'})
    }
  }

  login=()=>{
    const email = this.state.email
    const password = this.state.password
    Bmob.User.login(email,password).then(res => {
      console.log(res)
      Taro.atMessage({
        'message': '登录成功',
        'type': 'success',
      })
      setTimeout(()=>{
        Taro.navigateBack({
          delta:1
        })
      },800)
    }).catch(err => {
      Taro.atMessage({
        'message': '登录失败，请检查输入或稍后再试',
        'type': 'error',
      })
      console.log(err)
    });
  }

  // componentDidUpdate(prevState){
  //   const email = this.state.email
  //   const password = this.state.password
  // }

  render () {
    const email = this.state.email
    const emailErr = this.state.emailErr
    const isFinished = this.state.isFinished
    const isPassword = this.state.isPassword
    return (
      <View className='login-bg'>
        <Text className='logo'>为路</Text>
        <View className='login-container'>
          <View className='login-input'>
            <AtInput
              name='mail'
              type='text'
              placeholder='请输入邮箱'
              border={false}
              value={this.state.email}
              onBlur={this.blurEmail}
              onChange={this.handleChangeEmail.bind(this)}
            />
            {
              (emailErr === true) ? <View className='signUpErr'>邮箱格式不正确</View> :<View></View>
            }
            <View className='passwordContainer'>
              <AtInput
                name='password'
                type={isPassword}
                placeholder='请输入密码'
                className='passwordInput'
                border={false}
                value={this.state.password}
                onBlur={this.blurPassword}
                onChange={this.handleChangePassword}
              />
              <View className='at-icon at-icon-eye' onClick={this.changePasswordDis}></View>
            </View>
            <View className='login-help'>
              {/* <Checkbox className='remember'>记住我</Checkbox> */}
              <Text className='forgotPassword'>忘记密码?</Text>
            </View>
          </View>
          <View className='btn'>
            <AtButton className='submit' disabled={!isFinished} onClick={this.login}>登录</AtButton>
            <AtMessage/>
            <AtButton className='logon' onClick={this.toSignUp}>注册</AtButton>
          </View>
        </View>
      </View>
    )
  }
}