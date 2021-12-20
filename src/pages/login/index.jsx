import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Text,Checkbox } from '@tarojs/components'
import './index.scss'
import { AtInput, AtButton, AtForm } from 'taro-ui'

export default class Login extends Component {

  render () {
    return (
      <View className='login-bg'>
        <Text className='logo'>Logo</Text>
        <View className='login-container'>
          <View className='login-input'>
            <AtInput
              name='mail'
              type='digit'
              placeholder='请输入邮箱'
              border={false}
            />
            <AtInput
              name='password'
              type='password'
              placeholder='请输入密码'
              border={false}
            />
            <View className='login-help'>
              <Checkbox className='remember'>记住我</Checkbox>
              <Text className='forgotPassword'>忘记密码?</Text>
            </View>
          </View>
          <View className='btn'>
            <AtButton className='submit'>登录</AtButton>
            <AtButton className='logon'>注册</AtButton>
          </View>
        </View>
      </View>
    )
  }
}