import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Button } from '@tarojs/components'
import './index.scss'
import { AtRadio,AtCheckbox,AtIcon  } from 'taro-ui'

export default class Index extends Component {
  //   state = {
  //     value: '',
  //     count:0
  //   }
  // handleChange (value) {
  //   var count = this.state.count
  //   this.setState({
  //     value
  //   })
  //   if(value==='option1' || value === 'option4'){
  //     this.setState({count:count+1})
  //   }
  //   console.log(value)
  //   console.log(count)
  // }
    state = {
    checkedList:new Array(60).fill(''),
    isDisabled:true,
    R:0,
    I:0,
    A:0,
    S:0,
    E:0,
    C:0
    }
    checkboxOption = [
      {
        value: '1',
        label: '1、我喜欢把一件事情做完后再做另一件事。',
      },{
        value: '2',
        label: '2、在工作中我喜欢独自筹划，不愿受别人干涉。'
      },{
        value: '3',
        label: '3、在集体讨论中，我往往保持沉默。',
      },{
        value: '4',
        label: '4、、我喜欢做戏剧、音乐、歌舞、新闻采访等方面的工作。',
      },{
        value: '5',
        label: '5、每次写信我都一挥而就，不再重复。',
      },{
        value: '6',
        label: '6、我经常不停地思考某一问题，直到想出正确的答案。',
      },{
        value: '7',
        label: '7、对别人借我的和我借别人的东西，我都能记得很清楚。',
      },{
        value: '8',
        label: '8、我喜欢抽象思维的工作，不喜欢动手的工作。',
      },{
        value: '9',
        label: '9、我喜欢成为人们注意的焦点。 ',
      },{
        value: '10',
        label: '10、我喜欢不时地夸耀一下自己取得的好成就。',
      },{
        value: '11',
        label: '11、我曾经渴望有机会参加探险。',
      },{
        value: '12',
        label: '12、当我一个独处时，会感到更愉快。',
      },{
        value: '13',
        label: '13、我喜欢在做事情前，对此事情做出细致的安排。',
      },{
        value: '14',
        label: '14、我讨厌修理自行车、电器一类的工作。',
      },{
        value: '15',
        label: '15、我喜欢参加各种各样的聚会。',
      },{
        value: '16',
        label: '16、我愿意从事虽然工资少、但是比较稳定的职业。',
      },{
        value: '17',
        label: '17、音乐能使我陶醉。',
      },{
        value: '18',
        label: '18、我办事很少思前想后。',
      },{
        value: '19',
        label: '19、我喜欢经常请示上级。',
      },{
        value: '20',
        label: '20、我喜欢需要运用智力的游戏。',
      },{
        value: '21',
        label: '21、我很难做那种需要持续集中注意力的工作。',
      },{
        value: '22',
        label: '22、我喜欢亲自动手制作一些东西，从中得到乐趣。',
      },{
        value: '23',
        label: '23、我的动手能力很差。',
      },{
        value: '24',
        label: '24、和不熟悉的人交谈对我来说毫不困难。',
      },{
        value: '25',
        label: '25、和别人谈判时，我总是很容易放弃自己的观点。',
      },{
        value: '26',
        label: '26、我很容易结识同性朋友。',
      },{
        value: '27',
        label: '27、对于社会问题，我通常持中庸的态度。',
      },{
        value: '28',
        label: '28、当我开始做一件事情后，即使碰到再多的困难，我也要执著地干下去。',
      },{
        value: '29',
        label: '29、我是一个沉静而不易动感情的人。',
      },{
        value: '30',
        label: '30、当我工作时，我喜欢避免干扰。',
      },{
        value: '31',
        label: '31、我的理想是当一名科学家。',
      },{
        value: '32',
        label: '32、与言情小说相比，我更喜欢推理小说。',
      },{
        value: '33',
        label: '33、有些人太霸道，有时明明知道他们是对的，也要和他们对着干。',
      },{
        value: '34',
        label: '34、我爱幻想。',
      },{
        value: '35',
        label: '35、我总是主动地向别人提出自己的建议。',
      },{
        value: '36',
        label: '36、我喜欢使用榔头一类的工具。',
      },{
        value: '37',
        label: '37、我乐于解除别人的痛苦。',
      },{
        value: '38',
        label: '38、我更喜欢自己下了赌注的比赛或游戏。',
      },{
        value: '39',
        label: '39、我喜欢按部就班地完成要做的工作。',
      },{
        value: '40',
        label: '40、我希望能经常换不同的工作来做。',
      },{
        value: '41',
        label: '41、我总留有充裕的时间去赴约会。',
      },{
        value: '42',
        label: '42、我喜欢阅读自然科学方面的书籍和杂志。',
      },{
        value: '43',
        label: '43、如果掌握一门手艺并能以此为生，我会感到非常满意。',
      },{
        value: '44',
        label: '44、我曾渴望当一名汽车司机。',
      },{
        value: '45',
        label: '45、听别人谈“家中被盗”一类的事，很难引起我的同情。',
      },{
        value: '46',
        label: '46、如果待遇相同，我宁愿当商品推销员，而不愿当图书管理员。',
      },{
        value: '47',
        label: '47、我讨厌跟各类机械打交道。',
      },{
        value: '48',
        label: '48、我小时候经常把玩具拆开，把里面看个究竟。',
      },{
        value: '49',
        label: '49、当接受新任务后，我喜欢以自己的独特方法去完成它。',
      },{
        value: '50',
        label: '50、我有文艺方面的天赋。',
      },{
        value: '51',
        label: '51、我喜欢把一切安排得整整齐齐、井井有条。',
      },{
        value: '52',
        label: '52、我喜欢作一名教师。',
      },{
        value: '53',
        label: '53、和一群人在一起的时候，我总想不出恰当的话来说。',
      },{
        value: '54',
        label: '54、看情感影片时，我常禁不住眼圈红润。',
      },{
        value: '55',
        label: '55、我讨厌学数学。',
      },{
        value: '56',
        label: '56、在实验室里独自做实验会令我寂寞难耐。',
      },{
        value: '57',
        label: '57、对于急躁、爱发脾气的人，我仍能以礼相待。',
      },{
        value: '58',
        label: '58、遇到难解答的问题时，我常常放弃。',
      },{
        value: '59',
        label: '59、大家公认我是一名勤劳踏实的、愿为大家服务的人。',
      },{
        value: '60',
        label: '60、我喜欢在人事部门工作。',
      }
  ]
  handleChange (value) {
    this.setState({
      checkedList: value
    })
    if(value.length > 0){
      this.setState({isDisabled:false})
    }
    else if(value.length === 0){
      this.setState({isDisabled:true})
    }
  }
  toProfessionTsetInfo(){
    Taro.navigateTo({
      url:'../../pagesA/professionTestInfo/index'
    })
  }

  sub=()=>{
    const checkedList = this.state.checkedList
    const R = this.state.R
    const I = this.state.I
    const A = this.state.A
    const S = this.state.S
    const E = this.state.E
    const C = this.state.C
    var tR = 0,tI = 0,tA = 0,tS = 0,tE = 0,tC = 0
    var ans = ''
    for(let i = 0;i < 60;i++){
      if(checkedList[i] === '7' || checkedList[i] === '19' || checkedList[i] === '29'|| checkedList[i] === '39' || checkedList[i] === '41' || checkedList[i] === '51' || checkedList[i] === '57'){
        tC++
      }
      else if(checkedList[i] === '2' || checkedList[i] === '13' || checkedList[i] === '22' || checkedList[i] === '36' || checkedList[i] === '43'){
        tR++
      }
      else if(checkedList[i] === '6' || checkedList[i] === '8' || checkedList[i] === '20' || checkedList[i] === '30' || checkedList[i] === '31' || checkedList[i] === '42'){
        tI++
      }
      else if(checkedList[i] === '11' || checkedList[i] === '24' || checkedList[i] === '28' || checkedList[i] === '35' || checkedList[i] === '38' || checkedList[i] === '46' || checkedList[i] === '60'){
        tE++
      }
      else if(checkedList[i] === '26' || checkedList[i] === '37' || checkedList[i] === '52' || checkedList[i] === '59'){
        tS++
      }
      else if(checkedList[i] === '4' || checkedList[i] === '9' || checkedList[i] === '10' || checkedList[i] === '17' || checkedList[i] === '33' || checkedList[i] === '34' || checkedList[i] === '49' || checkedList[i] === '50' || checkedList[i] === '54'){
        tA++
      }
    }

    tC += !(checkedList.includes('5')) + !(checkedList.includes('18')) + !(checkedList.includes('40'))
    tR += !(checkedList.includes('14')) + !(checkedList.includes('23')) + !(checkedList.includes('44')) + !(checkedList.includes('47')) + !(checkedList.includes('48'))
    tI += !(checkedList.includes('21')) + !(checkedList.includes('55')) + !(checkedList.includes('56')) + !(checkedList.includes('58'))
    tE += !(checkedList.includes('3')) + !(checkedList.includes('16')) + !(checkedList.includes('25'))
    tS += !(checkedList.includes('1')) + !(checkedList.includes('12')) + !(checkedList.includes('15')) + !(checkedList.includes('27')) + !(checkedList.includes('45')) + !(checkedList.includes('53'))
    tA += !(checkedList.includes('32'))
    // console.log(0+!(checkedList.includes('5')))


    var arr = [tR,tI,tA,tS,tE,tC].sort((a, b) => a - b)
    if(tR === arr[5] || tR === arr[4] || tR === arr[3]){
      ans +='R'
    }
    if(tI === arr[5] || tI === arr[4] || tI === arr[3]){
      ans +='I'
    }
    if(tA === arr[5] || tA === arr[4] || tA === arr[3]){
      ans +='A'
    }
    if(tS === arr[5] || tS === arr[4] || tS === arr[3]){
      ans +='S'
    }
    if(tE === arr[5] || tE === arr[4] || tE === arr[3]){
      ans +='E'
    }
    if(tC === arr[5] || tC === arr[4] || tC === arr[3]){
      ans +='C'
    }
    if(ans.length > 3){
      ans = ans.substring(0,3)
    }
    console.log(arr[5],arr[4],arr[3])
    console.log(ans)
    console.log(arr)
    Taro.navigateTo({
      url:`../../pagesA/professionTestRes/index?res=${ans}`
    })
  }

  componentDidUpdate(){
    console.log(this.state.checkedList)
  }
  render () {
    const isDisabled = this.state.isDisabled
    return (
      <View>
        {/* <AtRadio
        options={[
          { label: '单选项一', value: 'option1', desc: '单选项描述' },
          { label: '单选项二', value: 'option2' },
          { label: '单选项三禁用', value: 'option3', desc: '单选项描述', disabled: true }
        ]}
        value={this.state.value}
        onClick={this.handleChange.bind(this)}
      />
        <AtRadio
        options={[
          { label: '单选项一', value: 'option4', desc: '单选项描述' },
          { label: '单选项二', value: 'option5' },
          { label: '单选项三禁用', value: 'option6', desc: '单选项描述', disabled: true }
        ]}
        value={this.state.value}
        onClick={this.handleChange.bind(this)}
      /> */}
      <View className='professionTestTitle'>职业兴趣测试</View>
      <View className='professionInfo' onClick={this.toProfessionTsetInfo}><View className='at-icon at-icon-help'></View>我有疑问？</View>
      <View className='professionDescribe'>请在以下选项中选择符合您自身的选项</View>
      <AtCheckbox
        options={this.checkboxOption}
        selectedList={this.state.checkedList}
        onChange={this.handleChange.bind(this)}
      />
      <Button disabled={isDisabled} className='professionTestBtn' onClick={this.sub}>提交</Button>
      </View>
    )
  }
}