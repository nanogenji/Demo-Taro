import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Text, Button } from '@tarojs/components'
import './index.scss'
import { AtTextarea } from 'taro-ui'

export default class Index extends Component {
  state = {
    value: '',
    isDisabled:true
  }
  handleChange=(value)=> {
    this.setState({
      value
    })
    console.log(value)
    //空内容限制
    if(value.length > 0){
      this.setState({isDisabled:false})
    }
    else if(value.length === 0){
      this.setState({isDisabled:true})
    }
  }
  sub=()=>{
    Taro.showModal({
      content: '您已提交成功！',
      showCancel:false,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    })
    this.setState({value:'',isDisabled:true})
  }
  render () {
    const isDisabled = this.state.isDisabled
    return (
      <View>
        <View className='feedbackTitle'>帮助与反馈</View>
        <AtTextarea
        className='feedbackText'
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
        maxLength={200}
        autoFocus={true}
        height={200}
        placeholder='你的建议 / 疑问是...'
      />
      <Button disabled={isDisabled} className='feedbackBtn' onClick={this.sub}>提交</Button>
      </View>
    )
  }
}