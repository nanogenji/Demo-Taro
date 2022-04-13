import { Component } from 'react'
import Taro, { getCurrentInstance, Current } from '@tarojs/taro'
import { View,Text } from '@tarojs/components'
import './index.scss'
import {  } from 'taro-ui'

export default class Index extends Component {
  state ={
    res:'',
    personalityA:'',
    personalityB:'',
    personalityC:'',
    typeR:`具有顺从、坦率、谦虚、自然、坚毅、实际、有礼、害羞、稳健、节俭的特征，表现为：
    1、喜爱实用性的职业或情境，以从事所喜好的活动，避免社会性的职业或情境。
    2、用具体实际的能力解决工作及其他方面的问题，较缺乏人际关系方面的能力。
    3、重视具体的事物，如金钱，权力、地位等。
    `,
    typeI:`　　具有分析、谨慎、批评、好奇、独立、聪明、内向、条理、谦逊、精确、理发、保守的特征，表现为：
    1、喜爱研究性的职业或情境，避免企业性的职业或情境。
    2、用研究的能力解决工作及其他方面的问题，即自觉、好学、自信，重视科学，但缺乏领导方面的才能。
    `,
    typeA:`　　具有复杂、想象、冲动、独立、直觉、无秩序、情绪化、理想化、不顺从、有创意、富有表情、不重实际的特征，表现为
    1、喜爱艺术性的职业或情境，避免传统性的职业或情境。
    2、富有表达能力和直觉、独立、具创意、不顺从（包括表演、写作、语言），并重视审美的领域。
    `,
    typeS:`　　具有合作、友善、慷慨、助人、仁慈、负责、圆滑、善社交、善解人意、说服他人、理想主义等特征，表现为：
    1、喜爱社会型的职业或情境，避免实用性的职业或情境，并以社交方面的能力解决工作及其他方面的问题，但缺乏机械能力与科学能力。
    2、喜欢帮助别人、了解别人，有教导别人的能力，且重视社会与伦理的活动与问题。
    `,
    typeE:`　　具有冒险、野心、独断、冲动、乐观、自信、追求享受、精力充沛、善于社交、获取注意、知名度等特征，表现为：
    1、喜欢企业性质的的职业或环境，避免研究性质的职业或情境，会以企业方面的能力解决工作或其他方面的问题能力。
    2、有冲动、自信、善社交、知名度高、有领导与语言能力，缺乏科学能力，但重视政治与经济上的成就。
    `,
    typeC:`　　具有顺从、谨慎、保守、自控、服从、规律、坚毅、实际稳重、有效率、但缺乏想象力等特征，表现为：
    1、喜欢传统性质的的职业或环境，避免艺术性质的职业或情境，会以传统的能力解决工作或其他方面的问题。
    2、喜欢顺从、规律、有文书与数字能力，并重视商业与经济上的成就。
    `,
    work:''
  }
  $instance = getCurrentInstance()
  componentWillMount(){
    const res = this.state.res
    this.setState({res:Current.router.params.res})
  }
  componentDidMount(){
    var res = this.state.res
    const personalityA = this.state.personalityA
    const personalityB = this.state.personalityB
    const personalityC = this.state.personalityC
    const work = this.state.work
    if(res[0] === 'R'){
      this.setState({personalityA:this.state.typeR})
    }
    else if(res[0] === 'I'){
      this.setState({personalityA:this.state.typeI})
    }
    else if(res[0] === 'A'){
      this.setState({personalityA:this.state.typeA})
    }
    else if(res[0] === 'S'){
      this.setState({personalityA:this.state.typeS})
    }
    else if(res[0] === 'E'){
      this.setState({personalityA:this.state.typeE})
    }
    else if(res[0] === 'C'){
      this.setState({personalityA:this.state.typeC})
    }

    if(res[1] === 'R'){
      this.setState({personalityB:this.state.typeR})
    }
    else if(res[1] === 'I'){
      this.setState({personalityB:this.state.typeI})
    }
    else if(res[1] === 'A'){
      this.setState({personalityB:this.state.typeA})
    }
    else if(res[1] === 'S'){
      this.setState({personalityB:this.state.typeS})
    }
    else if(res[1] === 'E'){
      this.setState({personalityB:this.state.typeE})
    }
    else if(res[1] === 'C'){
      this.setState({personalityB:this.state.typeC})
    }

    if(res[2] === 'R'){
      this.setState({personalityC:this.state.typeR})
    }
    else if(res[2] === 'I'){
      this.setState({personalityC:this.state.typeI})
    }
    else if(res[2] === 'A'){
      this.setState({personalityC:this.state.typeA})
    }
    else if(res[2] === 'S'){
      this.setState({personalityC:this.state.typeS})
    }
    else if(res[2] === 'E'){
      this.setState({personalityC:this.state.typeE})
    }
    else if(res[2] === 'C'){
      this.setState({personalityC:this.state.typeC})
    }

    if(res.includes('R') && res.includes('I') && res.includes('A')){
      this.setState({work:'牙科技术员、陶工、 建筑设计员、模型工、细木工、制作链条人员。'})
    }
    else if(res.includes('R') && res.includes('I') && res.includes('S')){
      this.setState({work:`厨师、林务员、跳水员、潜水员、染色员、电器修理、眼镜制作、电工、
      纺织机器装配工、服务员、装玻璃工人、发电厂工人、焊接工。
      `})
    }
    else if(res.includes('R') && res.includes('I') && res.includes('E')){
      this.setState({work:`建筑和桥梁工程、环境工程、航空工程、公路工程、电力工程、信号工程、电话工程、
      一般机械工程、自动工程、矿业工程、海洋工程、交通工程技术人员、制图员、
      家政经济人员、计量员、农民、农场工人、农业机械操作、清洁工、无线电修理、
      汽车修理、手表修理、管工、线路装配工、工具仓库管理员。
      `})
    }
    else if(res.includes('R') && res.includes('I') && res.includes('C')){
      this.setState({work:`船上工作人员、接待员、杂志保管员、牙医助手、制帽工、磨坊工、石匠、机器制造、
      机车(火车头)制造、农业机器装配、汽车装配工、缝纫机装配工、钟表装配和检验、
      电动器具装配、鞋匠、锁匠、货物检验员、电梯机修工、装配工、托儿所所长、
      钢琴调音员、印刷工、建筑 钢铁工作、卡车司机。
      `})
    }
    else if(res.includes('R') && res.includes('A') && res.includes('I')){
      this.setState({work:`手工雕刻、玻璃雕刻、制作模型人员、家具木工、制作皮革品、手工绣花、
      手工钩针纺织、排字工作、印刷工作、图画雕刻、装订工。
      `})
    }
    else if(res.includes('R') && res.includes('S') && res.includes('E')){
      this.setState({work:`消防员、交通巡警、警察、门卫、理发师、房间清洁工、屠夫、锻工、开凿工人、
      管道安装工、出租汽车驾驶员、货物搬运工、送报员、勘探员、 娱乐场所的服务员、
      起卸机操作工、灭害虫者、电梯操作工、厨房助手。
      `})
    }
    else if(res.includes('R') && res.includes('S') && res.includes('I')){
      this.setState({work:`纺织工、编织工、农业学校教师、某些职业课程教师(诸如艺术、商业、技术、工艺课程)、
      雨衣上胶工。
      `})
    }
    else if(res.includes('R') && res.includes('E') && res.includes('C')){
      this.setState({work:`抄水表员、保姆、实验室动物饲养员、动物管理员。`})
    }
    else if(res.includes('R') && res.includes('E') && res.includes('I')){
      this.setState({work:`轮船船长、航海领航员、大副、试管实验员。`})
    }
    else if(res.includes('R') && res.includes('E') && res.includes('S')){
      this.setState({work:`旅馆服务员、家畜饲养员、渔民、渔网修补工、水手长、收割机操作工、搬运行李工人、
      公园服务员、救 生员、登山导游、火车工程技术员、建筑工作、铺轨工人。
      `})
    }
    else if(res.includes('R') && res.includes('C') && res.includes('I')){
      this.setState({work:`测量员、勘测员、仪表操作者、农业工程技术、化学工程技师、民用工程技师、
      石油工程技师、资料室管理员、探矿工、煅烧工、烧窖工、矿工、炮手、保养工、
      磨床工、取样工、样品检验员、纺纱工、漂洗工、电焊工、锯木工、刨床工、制帽工、
      手工缝纫工、油漆工、 染色工、按摩工、木匠、农民建筑工作、电影放映员、
      勘测员助手。
      `})
    }
    else if(res.includes('R') && res.includes('C') && res.includes('S')){
      this.setState({work:`公共汽车驾驶员、一等水手、游泳池服务员、裁缝、建筑工作、石匠、烟囱修建工、
      混凝土工、电话修理工、爆炸手、 邮递员、矿工、裱糊工人、纺纱工。
      `})
    }
    else if(res.includes('R') && res.includes('C') && res.includes('E')){
      this.setState({work:`打井工、吊车驾驶员、农场工人、邮件分类员、铲车司机、拖拉机司机。`})
    }
    else if(res.includes('I') && res.includes('A') && res.includes('S')){
      this.setState({work:`普通经济学家、农场经济学家、财政经济学家、国际贸易经济学家、实验心理
      学家、工程心理学家、心理学家、哲学家、内科医生、数学家。
`})
    }
    else if(res.includes('I') && res.includes('A') && res.includes('R')){
      this.setState({work:`人类学家、天文学家、化学家、物理学家、医学病理、动物标本剥制者、化石修复者、
      艺术品管理者。
`})
    }
    else if(res.includes('I') && res.includes('S') && res.includes('E')){
      this.setState({work:`营养学家、饮食顾问、火灾检查员、邮政服务检查员。`})
    }
    else if(res.includes('I') && res.includes('S') && res.includes('C')){
      this.setState({work:`侦察员、电视播音室修理员、电视修理服务员、验尸室人员、编目录者、
      医学实验定技师、调查研究者。
      `})
    }
    else if(res.includes('I') && res.includes('S') && res.includes('R')){
      this.setState({work:`水生生物学者，昆虫学者、
      微生物学家、配镜师、矫正视力者、
      细菌学家、牙科医生、骨科医生。
`})
    }
    else if(res.includes('I') && res.includes('S') && res.includes('A')){
      this.setState({work:`实验心理学家、普通心理学家、发展心理学家、教育心理学家、社会心理学家、
      临床心理学家、目标学家、皮肤病学家、精神病学家、妇产科医师、眼科医生、
      五官科医生、医学实验室技术专家、民航医务人员、护士。
      `})
    }
    else if(res.includes('I') && res.includes('E') && res.includes('S')){
      this.setState({work:`细菌学家、生理学家、化学专家、地质专家、地理物理学专家、纺织技术专家、
      医院药剂师、工业药剂师、药房营业员。
      `})
    }
    else if(res.includes('I') && res.includes('E') && res.includes('C')){
      this.setState({work:`档案保管员、保险统计员。`})
    }
    else if(res.includes('R') && res.includes('I') && res.includes('S')){
      this.setState({work:``})
    }
    else if(res.includes('I') && res.includes('C') && res.includes('R')){
      this.setState({work:`质量检验技术员、地质学技师、工程师、法官、图书馆技术辅导员、计算机操作员、
      医院听诊员、家禽检查员。
      `})
    }
    else if(res.includes('I') && res.includes('R') && res.includes('A')){
      this.setState({work:`地理学家、地质学家、声学物理学家、矿物学家、古生物学家、石油学家、地震学家、
      声学物理学家、气象学家、原子和分子物理学家、电学和磁学物理学家、设计审核员、
      人口统计学家、数学统计学家、外科医生、城市规划家、气象员。
      `})
    }
    else if(res.includes('I') && res.includes('R') && res.includes('S')){
      this.setState({work:`流体物理学家、物理海洋学家、等离子体物理学家、农业科学家、动物学家、
      食品科学家、园艺学家、植物学家、细菌学家、解剖学家、动物病理学家、作物病理学家、
          药物学家、生物化学家、生物物理学家、细胞生物学家、临床化学家、遗传学家、
          分子生物学家、质量控制工程师、地理学家、兽医、放射性治疗技师。
      `})
    }
    else if(res.includes('I') && res.includes('R') && res.includes('E')){
      this.setState({work:`化验员、化学工程师、纺织工程师、食品技师、渔业技术专家、材料和测试工程师、   
      电气工程师、土木工程师、航空工程师、行政官员、冶金专家、原子核工程师、
            陶瓷工程师、地质工程师、电力工程量、口腔科医生、牙科医生。
      `})
    }
    else if(res.includes('I') && res.includes('R') && res.includes('C')){
      this.setState({work:`飞机领航员、飞行员、物理实验室技师、文献检查员、农业技术专家、生物技师、
      动植物技术专家、油管检查员、工商业规划者、矿藏安全检查员、纺织品检验员、
照相机修理者、工程技术员、编计算程序者、工具设计者、仪器维修工。
`})
    }
    else if(res.includes('C') && res.includes('R') && res.includes('I')){
      this.setState({work:`簿记员、会计、记时员、铸造机操作工、打字员、按键操作工、复印机操作工。`})
    }
    else if(res.includes('C') && res.includes('R') && res.includes('S')){
      this.setState({work:`仓库保管员、档案管理员、缝纫工、讲述员、收款人。`})
    }
    else if(res.includes('C') && res.includes('R') && res.includes('E')){
      this.setState({work:`标价员、实验室工作者、广告管理员、自动打字机操作员、电动机装配工、缝纫机操作工。`})
    }
    else if(res.includes('C') && res.includes('I') && res.includes('S')){
      this.setState({work:`记账员、顾客服务员、报刊发行员、土地测量员、保险公司职员、会计师、估价员、
      邮政检查员、外贸检查员。
      `})
    }
    else if(res.includes('C') && res.includes('I') && res.includes('E')){
      this.setState({work:`打字员、统计员、支票记录员、订货员、校对员、办公室工作人员。`})
    }
    else if(res.includes('C') && res.includes('I') && res.includes('R')){
      this.setState({work:`校对员、工程职员、海底电报员、检修计划员、发扳员。`})
    }
    else if(res.includes('C') && res.includes('S') && res.includes('E')){
      this.setState({work:`接待员、通讯员、电话接线员、卖票员、旅馆服务员、私人职员、商学教师、旅游办事员。`})
    }
    else if(res.includes('C') && res.includes('S') && res.includes('R')){
      this.setState({work:`运货代理商、铁路职员、交通检查员、办公室通信员、薄记员、出纳员、银行财务职员。`})
    }
    else if(res.includes('C') && res.includes('S') && res.includes('A')){
      this.setState({work:`秘书、图书管理员、办公室办事员。`})
    }
    else if(res.includes('C') && res.includes('E') && res.includes('R')){
      this.setState({work:`邮递员、数据处理员、办公室办事员。`})
    }
    else if(res.includes('C') && res.includes('E') && res.includes('I')){
      this.setState({work:`推销员、经济分析家。`})
    }
    else if(res.includes('C') && res.includes('E') && res.includes('S')){
      this.setState({work:`银行会计、记账员、法人秘书、速记员、法院报告人。`})
    }
    else if(res.includes('E') && res.includes('C') && res.includes('I')){
      this.setState({work:`银行行长、审计员、信用管理员、地产管理员、商业管理员。`})
    }
    else if(res.includes('E') && res.includes('C') && res.includes('S')){
      this.setState({work:`信用办事员、保险人员、各类进货员、海关服务经理、售货员，购买员、会计。`})
    }
        else if(res.includes('E') && res.includes('R') && res.includes('I')){
      this.setState({work:`信用办事员、保险人员、各类进货员、海关服务经理、售货员，购买员、会计。`})
    }
        else if(res.includes('E') && res.includes('R') && res.includes('S')){
      this.setState({work:`仓库管理员、房屋管理员、货栈监督管理员。`})
    }
    else if(res.includes('E') && res.includes('R') && res.includes('C')){
      this.setState({work:`邮政局长、渔船船长、机械操作领班、木工领班、瓦工领班、驾驶员领班。`})
    }
    else if(res.includes('E') && res.includes('I') && res.includes('R')){
      this.setState({work:`科学、技术和有关周期出版物的管理员。`})
    }
    else if(res.includes('E') && res.includes('I') && res.includes('C')){
      this.setState({work:`专利代理人、鉴定人、运输服务检查员、安全检查员、废品收购人员。`})
    }
    else if(res.includes('E') && res.includes('I') && res.includes('S')){
      this.setState({work:`警官、侦察员、交通检验员、安全咨询员、合同管理者、商人。`})
    }
    else if(res.includes('E') && res.includes('A') && res.includes('S')){
      this.setState({work:`法官、律师、公证人。`})
    }
    else if(res.includes('E') && res.includes('A') && res.includes('R')){
      this.setState({work:`展览室管理员、舞台管理员、播音员、训兽员。`})
    }
    else if(res.includes('E') && res.includes('S') && res.includes('C')){
      this.setState({work:`理发师、裁判员、政府行政管理员、财政管理员、工程管理员、售货员、职业病防治、
      商业经理、办公室主任、人事负责人、调度员。
      `})
    }
    else if(res.includes('E') && res.includes('S') && res.includes('R')){
      this.setState({work:`家具售货员、书店售货员、公共汽车的驾驶员、日用品售货员、护士长、
      自然科学和工程的行政领导。
      `})
    }
    else if(res.includes('E') && res.includes('S') && res.includes('I')){
      this.setState({work:`家具售货员、书店售货员、公共汽车的驾驶员、日用品售货员、护士长、
      自然科学和工程的行政领导。
      `})
    }
    else if(res.includes('E') && res.includes('S') && res.includes('A')){
      this.setState({work:`博物馆馆长、报刊管理员、音乐器材售货员、广告商售画营业员、
      导游、（轮船或班机上的）事务长、飞机上的服务员、船员、法官、律师。
      `})
    }
    else if(res.includes('A') && res.includes('S') && res.includes('E')){
      this.setState({work:`戏剧导演、舞蹈教师、广告撰稿人，报刊、专栏作者、记者、演员、英语翻译。`})
    }
    else if(res.includes('A') && res.includes('S') && res.includes('I')){
      this.setState({work:`音乐教师、乐器教师、美术教师、管弦乐指挥，合唱队指挥、歌星、演奏家、哲学家、
      作家、广告经理、时装模特。
      `})
    }
    else if(res.includes('A') && res.includes('E') && res.includes('R')){
      this.setState({work:`新闻摄影师、电视摄影师、艺术指导、录音指导、丑角演员、魔术师、木偶戏演员、骑士、
      跳水员。`})
    }
    else if(res.includes('A') && res.includes('E') && res.includes('I')){
      this.setState({work:`音乐指挥、舞台指导、电影导演。`})
    }
    else if(res.includes('A') && res.includes('E') && res.includes('S')){
      this.setState({work:`流行歌手、舞蹈演员、电影导演、广播节目主持人、舞蹈教师、口技表演者、喜剧演员、
      模特。`})
    }
    else if(res.includes('A') && res.includes('I') && res.includes('S')){
      this.setState({work:`画家、剧作家、编辑、评论家、时装艺术大师、新闻摄影师、男演员、文学作者。`})
    }
    else if(res.includes('A') && res.includes('I') && res.includes('E')){
      this.setState({work:`花匠、皮衣设计师、工业产品设计师、剪影艺术家、复制雕刻品大师。`})
    }
    else if(res.includes('A') && res.includes('I') && res.includes('R')){
      this.setState({work:`建筑师、画家、摄影师、绘图员、雕刻家、环境美化工、包装设计师、绣花工、
      陶器设计师、漫画工。`})
    }
    else if(res.includes('S') && res.includes('E') && res.includes('C')){
      this.setState({work:`社会活动家、退伍军人服务官员、工商会事务代表、教育咨询者、宿舍管理员、
      旅馆经理、饮食服务管理员。`})
    }
    else if(res.includes('S') && res.includes('E') && res.includes('R')){
      this.setState({work:`体育教练、游泳指导。`})
    }
    else if(res.includes('S') && res.includes('E') && res.includes('I')){
      this.setState({work:`大学校长、学院院长、医院行政管理员、历史学家、家政经济学家、职业学校教师、
      资料员。`})
    }
    else if(res.includes('S') && res.includes('E') && res.includes('A')){
      this.setState({work:`娱乐活动管理员、国外服务办事员、社会服务助理、一般咨询者、宗教教育工作者。`})
    }
    else if(res.includes('S') && res.includes('C') && res.includes('E')){
      this.setState({work:`部长助理、福利机构职员、生产协调人、环境卫生管理人员、戏院经理、
      餐馆经理、售票员。`})
    }
    else if(res.includes('S') && res.includes('R') && res.includes('I')){
      this.setState({work:`外科医师助手、医院服务员。`})
    }    
    else if(res.includes('S') && res.includes('R') && res.includes('E')){
      this.setState({work:`体育教师、职业病治疗者、体育教练、专业运动员、房管员、儿童家庭教师、
      警察、引座员、传达员、保姆。`})
    }    
    else if(res.includes('S') && res.includes('R') && res.includes('C')){
      this.setState({work:`护理员、护理助理、医院勤杂工、理发师、学校儿童服务人员。`})
    }    
    else if(res.includes('S') && res.includes('I') && res.includes('A')){
      this.setState({work:`社会学家、心理咨询者、学校心理学家、政治科学家、大学或学院的系主任、
      大学或学院的教育学教师、大学农业教师、大学法律教师、大学工程和建筑课程的教师、大学数学、
      医学、物理教师大学社会科学、生命科学教师、研究生助教、成人教育教师。`})
    }    
    else if(res.includes('S') && res.includes('I') && res.includes('E')){
      this.setState({work:`营养学家、饮食学家、海关检查员、安全检查员、税务稽查员、校长。`})
    }    
    else if(res.includes('S') && res.includes('I') && res.includes('C')){
      this.setState({work:`描图员、兽医助手、诊所助理、体检检查员、娱乐指导者、监督缓刑犯的工作者、
      咨询人员、社会科学教师。
`})
    }    
    else if(res.includes('S') && res.includes('I') && res.includes('R')){
      this.setState({work:`理疗员、救护队工作人员、手足病医生、职业病治疗助手。`})
    }    
    else{
      this.setState({work:`您的类型样本数较少，暂无推荐职业。`})
    }
  }
  render () {
    const res = this.state.res
    const personalityA = this.state.personalityA
    const personalityB = this.state.personalityB
    const personalityC = this.state.personalityC
    const work = this.state.work
    return (
      <View className="TestResContainer">
        <View className='TestResTitle'>您的测试结果</View>
        <View className='TestRes'>{res}</View>
        <View className='infoTitle'>可能适合您的职位</View>
        <View className='TestResContent'>{work}</View>
        <View className='infoTitle'>您的人格倾向</View>
        <View className='personalityType'>{res[0]}</View>
        <View className='TestResContent'>
          {personalityA}
        </View>
        <View className='personalityType'>{res[1]}</View>
        <View className='TestResContent'>
          {personalityB}
        </View>
        <View className='personalityType'>{res[2]}</View>
        <View className='TestResContent'>
          {personalityC}
        </View>
      </View>
    )
  }
}