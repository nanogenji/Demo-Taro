import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtInput, AtForm,AtTextarea,AtImagePicker, AtButton,AtMessage    } from 'taro-ui'

export default class CreateArticle extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      value: '',
      files: [{
        url: 'https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80',
      },
      {
        url: 'https://images.unsplash.com/photo-1495231916356-a86217efff12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=736&q=80',
      },
      {
        url: 'https://images.unsplash.com/photo-1634567044367-b6b18bfec7ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=690&q=80',
      }]
    }
  }
  handleChange (value) {
    this.setState({
      value
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value
  }
  handleClick (type) {
    Taro.atMessage({
      'message': '发送成功',
      'type': type,
    })
    setTimeout(()=>{
      Taro.navigateBack({
        delta:1
      })
    },1200)
  }

  onChange2 (files) {
    this.setState({
      files
    })
  }
  onFail (mes) {
    console.log(mes)
  }
  onImageClick (index, file) {
    console.log(index, file)
  }
  render () {
    return (
      <View>
        <AtMessage />
        <AtForm>
          <AtInput
            className="title"
            name="title"
            title="添加标题"
            type="text"
            placeholder="加个标题"
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
          <AtTextarea
            className="content"
            value={this.state.value}
            // onChange={this.handleChange.bind(this)}
            maxLength={200}
            height={450}
            placeholder='尽情发挥吧'
          />
        </AtForm>
        <AtImagePicker
          files={this.state.files}
          onChange={this.onChange2.bind(this)}
        />
        <AtButton className="submit" type='primary' onClick={this.handleClick.bind(this, 'success')}>发表</AtButton>
      </View>
    )
  }
}
