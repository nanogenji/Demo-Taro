import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Text,Image,Input } from '@tarojs/components'
import './index.scss'
import { AtButton } from 'taro-ui'
import Like from '../../assets/like.png'
import Comments from '../../assets/comments.png'
import Share from '../../assets/Share.png'

export default class Index extends Component {

  render () {
    return (
      <View style={{minHeight: '100vh', overflow: 'hidden'}}>
        <View className='article-container'>
          <Text className='at-article__h1'>为应对新冠疫情 普京宣布俄罗斯全国放假</Text>
          <Text className='at-article__info'>发布时间: 10-20 22:18 环球网官方帐号</Text>
          <Image className='article-img' mode='widthFix'/>
          <Text className='at-article__p'>
          &nbsp;&nbsp;&nbsp;&nbsp;本文转自【央视新闻客户端】；
          {'\n\n'}
          &nbsp;&nbsp;&nbsp;&nbsp;当地时间10月20日，俄罗斯总统普京正式宣布，为应对新冠疫情，俄罗斯将于10月30日至11月7日全国放假。
          {'\n\n'}
          &nbsp;&nbsp;&nbsp;&nbsp;普京表示，俄罗斯各地方政府可以根据本地的疫情实际形势于10月23日提前放假或11月7日后延长放假日期。他还表示，接种新冠疫苗是防疫工作的重要措施，他指示全国各地都要进一步提高疫苗接种率。
          {'\n\n'}
          &nbsp;&nbsp;&nbsp;&nbsp;近期俄罗斯新增新冠肺炎病例快速增加，截至莫斯科时间10月20日11时30分，俄罗斯累计确诊8094825例，累计死亡226353例。（总台记者 徐鸿波）
          </Text>
        </View>

        <View className='article-footer'>
          <Input className='article-input' placeholder='发表你的评论'></Input>
          <View className='article_footer-action'>
            <AtButton className='btn' size='small' full={false}>
              <image className='article_footer-action_img' src={Like}/>
            </AtButton>
            <AtButton className='btn' size='small' full={false}>
              <image className='article_footer-action_img' src={Comments}/>
            </AtButton>          
            <AtButton className='btn' size='small' full={false}>
              <image className='article_footer-action_img' src={Share}/>
            </AtButton>
          </View>
        </View>
        <View className='emptySupport'></View>
      </View>
    )
  }
}