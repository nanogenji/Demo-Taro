import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.css'
import { AtTabs, AtTabsPane,AtBadge  } from 'taro-ui'
import Msg from '../../components/msg'
export default class Notification extends Component {

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

  render () {
    const tabList = [{ title: '通知' }, { title: '私信' }]
    return (
      <View>
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          {/* 通知 */}
        <AtTabsPane current={this.state.current} index={0} >
          <Msg/>
          <Msg/>
          <Msg/>
          <Msg/>
        </AtTabsPane>

        {/* 私信 */}
        <AtTabsPane current={this.state.current} index={1}>
          <View style='padding: 300px 50px;background-color: #FAFBFC;text-align: center;'>暂时没有私信喔</View>
        </AtTabsPane>
      </AtTabs>
      </View>
    )
  }
}
