import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.css'
import { AtInput, AtForm,AtTextarea,AtImagePicker, AtButton,AtMessage    } from 'taro-ui'

export default class Test extends Component {

  render () {
    return (
      <View>
        {/* <AtButton>nmd wsm</AtButton> */}
        <Demo />
      </View>
    )
  }
}


class Demo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      testMock: {
        name: "",
        tel: ""
      }
    }
  }
  componentDidMount() {
    Taro.request({
      url: 'http://localhost:3001/user'
    })
    .then(res => {
      this.setState({testMock: res.data})
    })
  }
  render() {
    return (
      <View>
        <Text>{this.state.testMock}</Text>
      </View>
    )
  }
}