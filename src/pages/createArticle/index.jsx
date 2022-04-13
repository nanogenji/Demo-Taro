import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtInput, AtForm,AtTextarea,AtImagePicker, AtButton,AtMessage    } from 'taro-ui'
import Bomb from '../../value/bomb'
let db = new Bomb({sercretKey:"8a7e35df0e10c1ec", apiSafeCode:"000419"});

var Bmob = require('../../value/src/lib/app');
Bmob.initialize("8a7e35df0e10c1ec", "000419");

export default class CreateArticle extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      title: '',
      content:'',
      // files: [{
      //   url: 'https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80',
      // },
      // {
      //   url: 'https://images.unsplash.com/photo-1495231916356-a86217efff12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=736&q=80',
      // },
      // {
      //   url: 'https://images.unsplash.com/photo-1634567044367-b6b18bfec7ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=690&q=80',
      // }]
      isDisabled:true
    }
  }
  handleChangeTitle=(value)=> {
    var isDisabled = this.state.isDisabled
    const title = this.state.title
    if(value.length > 0){
      isDisabled = false
    }
    else if(value.length === 0){
      isDisabled = true
    }
    this.setState({
      title:value,
      isDisabled
    })
    // console.log(isDisabled)
    // console.log(title)
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    // return value
  }
  handleClick=()=>{
    const title = this.state.title
    const content = this.state.content
    const query = Bmob.Query('article');
    query.set("content",content)
    query.set("title",title)
    query.save().then(res => {
      Taro.atMessage({
        'message': '发送成功',
        'type': 'success',
      })
      setTimeout(()=>{
        Taro.navigateBack({
          delta:1
        })
      },800)
      console.log(res)
    }).catch(err => {
      console.log(err)
      Taro.atMessage({
        'message': '发送',
        'type': 'error',
      })
    })
  }

  handleChangeContent=(content)=>{
    var isDisabled = this.state.isDisabled
    if(content.length > 0){
      isDisabled = false
    }
    else if(content.length === 0){
      isDisabled = true
    }
    this.setState({
      content,isDisabled
    })
    console.log(content)
  }
  onFail (mes) {
    console.log(mes)
  }
  onImageClick (index, file) {
    console.log(index, file)
  }
  render () {
    const isDisabled = this.state.isDisabled
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
            value={this.state.title}
            onChange={this.handleChangeTitle.bind(this)}
          />
          <AtTextarea
            className="content"
            value={this.state.content}
            // onChange={this.handleChange.bind(this)}
            maxLength={200}
            height={450}
            placeholder='尽情发挥吧'
          onChange={this.handleChangeContent.bind(this)}

          />
        </AtForm>
        <AtImagePicker
          files={this.state.files}
        />
        <AtButton disabled={isDisabled} className="submit" type='primary' onClick={this.handleClick}>发表</AtButton>
      </View>
    )
  }
}
