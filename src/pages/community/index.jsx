import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Text,Image } from '@tarojs/components'
import './index.css'
import { AtAvatar,AtIcon,AtFab,AtTabs, AtTabsPane } from 'taro-ui'
import Ava from '../../assets/user.png'
import OnePost from '../../components/onePost'
import OneAtricle from '../../components/oneArticle'
export default class Community extends Component {
  state = {
    current: 0,
    postLists: [
      {id:'001',userName:'user1',time:'2小时前',content:`这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。
      这是文本段落。这是文本段落。这是文本落。这是文本段落。
      1234567890123456789012345678901234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ`,},
      {id:'002',userName:'user2',time:'2021年11月1日',content:`不是刚开学吗怎么就11月了555~  不是刚开学吗怎么就11月了555~  不是刚开学吗怎么就11月了555~`,},
      {id:'003',userName:'user3',time:'2021年11月1日',content:`还是文本段落。还是文本段落。还是文本段落。还是文本段落。还是文本段落。还是文本段落。
      一二三三二一 ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890`,},
      {id:'004',userName:'user4',time:'2021年3月1日',content:`水贴凑字数水贴凑字数水贴凑字数水贴凑字数水贴凑字数`,},
    ]
  }

  handleClick = (value)=> {
    this.setState({
      current: value
    })
  }

  toCreatePost = ()=>{
    Taro.navigateTo({
      url:'/pages/createPost/index'
    })
  }

  render () {
    const tabList = [{ title: '想法' }, { title: '文章' }]
    const postLists = this.state.postLists
    return (
      <View style='background-color: #f7f7f7;'>
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
        <AtTabsPane current={this.state.current} index={0} >
          <View>
            {/* 一贴 */}
            <View className='community-container'>
              {
                postLists.map((postList) =>{
                  return <OnePost postList = {postList}/>
                })
              }
            </View>
          </View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={1}>
          <OneAtricle/>
          {/* 头条demo */}
          <View className='test-article-view'>
            <Image 
              className='test-article-break' 
              mode='widthFix' />
          </View>
            <OneAtricle/>
            <OneAtricle/>
            <OneAtricle/>
            <OneAtricle/>
        </AtTabsPane>
      </AtTabs>
      {/* 发帖 */}
      <AtFab className="createPost" type='primary' onClick={this.toCreatePost}>
        <AtIcon value='add' color='#fff'></AtIcon>
      </AtFab>
      </View>
    )
  }
}