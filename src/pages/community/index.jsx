import { Component } from 'react'
import Taro, { Current } from '@tarojs/taro'
import { View,Text,Image, ScrollView } from '@tarojs/components'
import './index.scss'
import { AtAvatar,AtIcon,AtFab,AtTabs, AtTabsPane } from 'taro-ui'
import Ava from '../../assets/user.png'
import OnePost from '../../components/onePost'
import OneAtricle from '../../components/oneArticle'
import Bomb from '../../value/bomb'
let db = new Bomb({sercretKey:"8a7e35df0e10c1ec", apiSafeCode:"000419"});

var Bmob = require('../../value/src/lib/app');
Bmob.initialize("8a7e35df0e10c1ec", "000419");

export default class Community extends Component {
  state = {
    current: 0,
    // postLists: [
    //   {id:'001',userName:'user1',time:'2小时前',content:`这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。
    //   这是文本段落。这是文本段落。这是文本落。这是文本段落。
    //   1234567890123456789012345678901234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ`,},
    //   {id:'002',userName:'user2',time:'2021年11月1日',content:`不是刚开学吗怎么就11月了555~  不是刚开学吗怎么就11月了555~  不是刚开学吗怎么就11月了555~`,},
    //   {id:'003',userName:'user3',time:'2021年11月1日',content:`还是文本段落。还是文本段落。还是文本段落。还是文本段落。还是文本段落。还是文本段落。
    //   一二三三二一 ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890`,},
    //   {id:'004',userName:'user4',time:'2021年3月1日',content:`水贴凑字数水贴凑字数水贴凑字数水贴凑字数水贴凑字数`,},
    // ],
    // articleLists:[
    //   {
    //     id:'001',
    //     time:'10-20 22:18',
    //     author:'环球网官方帐号',
    //     title:'为应对新冠疫情 普京宣布俄罗斯全国放假',
    //     content:`&nbsp;&nbsp;&nbsp;&nbsp;本文转自【央视新闻客户端】；
    //     {'\n\n'}
    //     &nbsp;&nbsp;&nbsp;&nbsp;当地时间10月20日，俄罗斯总统普京正式宣布，为应对新冠疫情，俄罗斯将于10月30日至11月7日全国放假。
    //     {'\n\n'}
    //     &nbsp;&nbsp;&nbsp;&nbsp;普京表示，俄罗斯各地方政府可以根据本地的疫情实际形势于10月23日提前放假或11月7日后延长放假日期。他还表示，接种新冠疫苗是防疫工作的重要措施，他指示全国各地都要进一步提高疫苗接种率。
    //     {'\n\n'}
    //     &nbsp;&nbsp;&nbsp;&nbsp;近期俄罗斯新增新冠肺炎病例快速增加，截至莫斯科时间10月20日11时30分，俄罗斯累计确诊8094825例，累计死亡226353例。（总台记者 徐鸿波）`
    //   },
    //   {
    //     id:'002',
    //     time:'10-20 22:18',
    //     author:'环球网官方帐号',
    //     title:'为应对新冠疫情 普京宣布俄罗斯全国放假',
    //     content:`&nbsp;&nbsp;&nbsp;&nbsp;本文转自【央视新闻客户端】；
    //     {'\n\n'}
    //     &nbsp;&nbsp;&nbsp;&nbsp;当地时间10月20日，俄罗斯总统普京正式宣布，为应对新冠疫情，俄罗斯将于10月30日至11月7日全国放假。
    //     {'\n\n'}
    //     &nbsp;&nbsp;&nbsp;&nbsp;普京表示，俄罗斯各地方政府可以根据本地的疫情实际形势于10月23日提前放假或11月7日后延长放假日期。他还表示，接种新冠疫苗是防疫工作的重要措施，他指示全国各地都要进一步提高疫苗接种率。
    //     {'\n\n'}
    //     &nbsp;&nbsp;&nbsp;&nbsp;近期俄罗斯新增新冠肺炎病例快速增加，截至莫斯科时间10月20日11时30分，俄罗斯累计确诊8094825例，累计死亡226353例。（总台记者 徐鸿波）`
    //   },
    //   {
    //     id:'003',
    //     time:'2021-12-15 17:01',
    //     author:'正观新闻',
    //     title:'浙江三地报告新增确诊病例57例',
    //     content:`今天（12月15日）下午，浙江省召开第89场新冠肺炎疫情防控工作新闻发布会。

    //     发布会上通报，自12月14日16时，到15日16时，浙江省宁波、绍兴、杭州报告新增确诊病例57例（其中，宁波7例、绍兴48例、杭州2例）。无报告新增无症状感染者。
        
    //     自12月5日以来，到15日16时，三地累计报告确诊病例292例、无症状感染者1例（不包括转为确诊病例的数量，下同）。其中，宁波累计报告确诊病例62例；绍兴累计报告确诊病例209例、无症状感染者1例；杭州累计报告确诊病例21例。
        
    //     全省已累计排查密接者15447人，次密接者32642人，均已落实管控措施。
        
    //     三地已累计开展核酸采检1163.53万人份，已出结果1110.15万人份，除上述感染者外，其他均为阴性。
        
    //     全省已累计纳入隔离管控605652人，其中集中隔离62409人，居家健康观察39390人，日常健康监测503853人。
        
    //     `
    //   },{
    //     id:'004',
    //     time:'10-20 22:18',
    //     author:'环球网官方帐号',
    //     title:'为应对新冠疫情 普京宣布俄罗斯全国放假',
    //     content:`今天（12月15日）下午，浙江省召开第89场新冠肺炎疫情防控工作新闻发布会。

    //     发布会上通报，自12月14日16时，到15日16时，浙江省宁波、绍兴、杭州报告新增确诊病例57例（其中，宁波7例、绍兴48例、杭州2例）。无报告新增无症状感染者。
        
    //     自12月5日以来，到15日16时，三地累计报告确诊病例292例、无症状感染者1例（不包括转为确诊病例的数量，下同）。其中，宁波累计报告确诊病例62例；绍兴累计报告确诊病例209例、无症状感染者1例；杭州累计报告确诊病例21例。
        
    //     全省已累计排查密接者15447人，次密接者32642人，均已落实管控措施。
        
    //     三地已累计开展核酸采检1163.53万人份，已出结果1110.15万人份，除上述感染者外，其他均为阴性。
        
    //     全省已累计纳入隔离管控605652人，其中集中隔离62409人，居家健康观察39390人，日常健康监测503853人。

    //     `
    //   },
    // ],
    articleLists:[],
    postListObj:'',
    postLists:[],
  }

  handleClick = (value)=> {
    this.setState({
      current: value
    })
  }

  toCreatePost = ()=>{
    const current = this.state.current
    if(current === 0){
      // console.log('想法')
      Taro.navigateTo({
      url:'/pages/createPost/index'
      })
    }
    else if(current === 1){
      console.log('文章')
      Taro.navigateTo({
      url:'/pages/createArticle/index'
      })
    }
    // Taro.navigateTo({
    //   url:'/pages/createPost/index'
    // })
  }
  addPostList=(postListObj)=>{
    const postLists = this.state.postLists
    const newPostLists = [postListObj,...postLists]
    this.setState({postLists:newPostLists})
  }

  onPullDownRefresh() {
    console.log('onPullDownRefresh...........')

    // TODO 这里加重新刷新界面的要的操作，比如网络请求
    db.getAll('article').then((value) => {
      this.setState({articleLists:value})
    })
    const query = Bmob.Query('content');
    query.find().then(res => {
      this.setState({postLists:res})
    });
    // 接口请求完毕后隐藏两个loading , 标题和下拉区域
    setTimeout(()=>{
      Taro.hideLoading();
      Taro.stopPullDownRefresh();
    },1000)
  }

  componentWillMount(){
    db.getAll('article').then((value) => {
      this.setState({articleLists:value})
    })

    const query = Bmob.Query('content');
    query.find().then(res => {
      this.setState({postLists:res})
    });
  }
  
  //有bug的发表
  // componentDidShow (){
  //   var postListObj = JSON.parse(decodeURI(Current.router.params.postListObj))
  //   console.log(postListObj)
  //   const postLists = this.state.postLists
  //   if(postListObj !== ''){
  //     const newPostLists = [postListObj,...postLists]
  //     postListObj = ''
  //     this.setState({postLists:newPostLists})
  //   }
  // }

  
  render () {
    const tabList = [{ title: '想法' }, { title: '文章' }]
    const postLists = this.state.postLists
    const articleLists = this.state.articleLists
    return (
      <View style='background-color: #f7f7f7;'>
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
        <AtTabsPane current={this.state.current} index={0} >
          <View>
            {/* 一贴 */}
            <ScrollView enableFlex={true} className='post-container'>
              {
                postLists.map((postList) =>{
                  return <OnePost postList = {postList}/>
                })
              }
            </ScrollView>
          </View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={1}>
          <ScrollView enableFlex={true} className='article-container'>
            {
              articleLists.map((articleList)=>{
                return <OneAtricle articleList = {articleList} />
              })
            }
          </ScrollView>
          {/*大横幅型*/}
          {/* <View className='test-article-view'>
            <Image 
              className='test-article-break' 
              mode='widthFix' />
          </View> */}
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