import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.css'
import { AtForm, AtSwitch,AtList, AtListItem,AtSlider,AtButton  } from 'taro-ui'

export default class Settings extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      value: false
    }
  }
  handleChange = value => {
    value = !value
    this.setState({ value })
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View>
        <View className='title'>
          <Text>设置</Text>
        </View>
        <AtForm>
          <AtListItem title='账号信息' arrow='right' onClick={this.handleClick} />
          <AtListItem title='我的地址' arrow='right' onClick={this.handleClick} />
          <AtSwitch title='Wi-Fi下视频自动播放' checked={this.state.value} onChange={this.handleChange} />
          {/* <AtSwitch title='已禁止' disabled onChange={this.handleChange} /> */}
          <AtSwitch title='个性化推送' />
          <Text className='font'>字体调整</Text>
          <AtSlider value={50} step={2}></AtSlider>
          <AtListItem title='消息通知' arrow='right' onClick={this.handleClick} />
          <AtListItem title='隐私' arrow='right' onClick={this.handleClick} />
          <AtListItem title='声音' arrow='right' onClick={this.handleClick} />
          <AtListItem title='通用' arrow='right' onClick={this.handleClick} />
          <AtListItem title='去评价 'hasBorder={false} arrow='right' onClick={this.handleClick} />
      </AtForm>
      <AtButton className='logout' circl={true}>退出账号</AtButton>
      </View>
    )
  }
}
