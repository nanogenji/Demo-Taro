import { Component } from 'react'
import Taro, { Current, getCurrentInstance } from '@tarojs/taro'
import { View,Text,Image,Input } from '@tarojs/components'
import './index.scss'
import { AtButton } from 'taro-ui'
import Like from '../../assets/like.png'
import Comments from '../../assets/comments.png'
import Share from '../../assets/Share.png'
import Bomb from '../../value/bomb'
let db = new Bomb({sercretKey:"8a7e35df0e10c1ec", apiSafeCode:"000419"});

export default class Index extends Component {
  $instance = getCurrentInstance()
  state = {
    // articleLists:[
    //   {
    //     id:'001',
    //     time:'10-20 22:18',
    //     author:'环球网官方帐号',
    //     title:'为应对新冠疫情 普京宣布俄罗斯全国放假',
    //     content:`本文转自【央视新闻客户端】；
        
    //     当地时间10月20日，俄罗斯总统普京正式宣布，为应对新冠疫情，俄罗斯将于10月30日至11月7日全国放假。

    //     普京表示，俄罗斯各地方政府可以根据本地的疫情实际形势于10月23日提前放假或11月7日后延长放假日期。他还表示，接种新冠疫苗是防疫工作的重要措施，他指示全国各地都要进一步提高疫苗接种率。

    //     近期俄罗斯新增新冠肺炎病例快速增加，截至莫斯科时间10月20日11时30分，俄罗斯累计确诊8094825例，累计死亡226353例。（总台记者 徐鸿波）`
    //   },
    //   {
    //     id:'002',
    //     time:'10-20 22:18',
    //     author:'环球网官方帐号',
    //     title:'为应对新冠疫情 普京宣布俄罗斯全国放假',
    //     content:`本文转自【央视新闻客户端】；
        
    //     当地时间10月20日，俄罗斯总统普京正式宣布，为应对新冠疫情，俄罗斯将于10月30日至11月7日全国放假。

    //     普京表示，俄罗斯各地方政府可以根据本地的疫情实际形势于10月23日提前放假或11月7日后延长放假日期。他还表示，接种新冠疫苗是防疫工作的重要措施，他指示全国各地都要进一步提高疫苗接种率。

    //     近期俄罗斯新增新冠肺炎病例快速增加，截至莫斯科时间10月20日11时30分，俄罗斯累计确诊8094825例，累计死亡226353例。（总台记者 徐鸿波）`
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
    //   },
    // ]
    articleList:[]
  }

  componentWillMount(){
    const id = Current.router.params.id
    db.get_('article',id).then((value) =>{
      this.setState({articleList:value})
    })
  }
  render () {
    // const id = JSON.parse(decodeURI(Current.router.params.id))
    const articleLists = this.state.articleLists
    // var articleList = ''
    // articleLists.map((articleListObj)=>{
    //   if(articleListObj.id === id) return articleList = {articleListObj}
    // })
    // var articleList = articleLists.find((articleListObj)=>{
    //   return articleListObj.id === id
    // })
    // console.log(articleList)
    const articleList = this.state.articleList
    return (
      <View style={{minHeight: '100vh', overflow: 'hidden'}}>
        <View className='article-container'>
          <Text className='at-article__h1'>{articleList.title}</Text>
          <Text className='at-article__info'>{'发布时间:'+ articleList.updatedAt + '  ' + articleList.author}</Text>
          <Image className='article-img' mode='widthFix'/>
          <Text className='at-article__p'>{articleList.content}</Text>
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