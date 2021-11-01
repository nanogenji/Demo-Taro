import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Text,Image } from '@tarojs/components'
import './index.css'
import { AtAvatar,AtIcon,AtFab,AtTabs, AtTabsPane } from 'taro-ui'
import Ava from '../../assets/user.png'
import OnePost from '../../components/onePost'
import OneAtricle from '../../components/oneArticle'
export default class Community extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }

  toCreatePost(){
    Taro.navigateTo({
      url:'/pages/createPost/index'
    })
  }

  render () {
    const tabList = [{ title: '想法' }, { title: '文章' }]
    return (
      <View>
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
        <AtTabsPane current={this.state.current} index={0} >
          <View style='background-color: #f7f7f7;'>
            {/* 一贴 */}
            <View className='community-container'>
              <OnePost/>
              <OnePost/>
              <OnePost/>
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