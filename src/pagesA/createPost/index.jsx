import { Component } from 'react'
import Taro, { getCurrentPages } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtInput, AtForm,AtTextarea,AtImagePicker, AtButton,AtMessage } from 'taro-ui'
import Bomb from '../../value/bomb'
let db = new Bomb({sercretKey:"8a7e35df0e10c1ec", apiSafeCode:"000419"});

var Bmob = require('../../value/src/lib/app');
Bmob.initialize("8a7e35df0e10c1ec", "000419");

export default class CreatePost extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      content: '',
      isDisabled:true,
    //   files: [
    //     {
    //     url: 'https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80',
    //   },
    //   {
    //     url: 'https://images.unsplash.com/photo-1495231916356-a86217efff12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=736&q=80',
    //   },
    //   {
    //     url: 'https://images.unsplash.com/photo-1634567044367-b6b18bfec7ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=690&q=80',
    //   }
    // ]
    }
  }
  handleChange=(value)=> {
    var isDisabled = this.state.isDisabled
    const content = this.state.content
    console.log(content)
    if(value.length > 0){
      isDisabled = false
    }
    else if(value.length === 0){
      isDisabled = true
    }
    this.setState({
      content:value
      ,isDisabled
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    // return value
  }
  submit=()=>{
    const content = this.state.content
    const query = Bmob.Query('content');
    query.set("mainContent",content)
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
        'message': '发送失败',
        'type': 'error',
      })
    })
    //新帖子
    // const value = this.state.value
    // const id = parseInt(new Date().getTime() / 1000) + '';
    // const time = new Date()//获取时间 未处理
    // const userName = 'userSend'
    // const content = value
    // var postList = {id,userName,time,content}
    // var postListObj = encodeURI(JSON.stringify(postList))
    // console.log(value + '/' + id + '/' + time)
    // console.log(this.state.content)

    //navigateBack传参方案
    // var pages = Taro.getCurrentPages();
    // var prevPage = pages[pages.length - 1];
    // console.log('pages' + pages + 'pre' + prevPage)
    // prevPage.setState({
    //   postListObj:postListObj
    // })

    // setTimeout(()=>{
    //   //关闭并返回
    //   // Taro.navigateBack({
    //   //   delta:1
    //   // })

    //   ///关闭并跳转
    //   Taro.reLaunch({
    //     url: `/pages/community/index?postListObj=${postListObj}`
    //   })
    // },800)
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
    const isDisabled = this.state.isDisabled
    const content = this.state.content
    return (
      <View>
        <AtMessage />
        <AtForm>
          {/* <AtInput
            className="title"
            name="title"
            title="添加标题"
            type="text"
            placeholder="加个标题"
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          /> */}

          <AtTextarea
            className="content"
            value={this.state.content}
            // onChange={this.handleChange.bind(this)}
            maxLength={200}
            placeholder='说点什么...'
            height={450}
            onChange={this.handleChange}
          />
        </AtForm>
        {/* <AtImagePicker
          className = 'imgPicker'
          files={this.state.files}
          onChange={this.onChange2.bind(this)}
        /> */}
        <AtButton className="submit" type='primary' disabled={isDisabled} onClick={this.submit}>发表</AtButton>
      </View>
    )
  }
}
