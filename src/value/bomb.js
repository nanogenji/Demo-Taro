// 导出云访问类和对象
import Bmob from "hydrogen-js-sdk";

// 数据库访问接口类
export default class Bmober {
  // 构造函数
  constructor(arg={}) {
    if (!arg.sercretKey || !arg.apiSafeCode) return
    this.init(arg.sercretKey, arg.apiSafeCode)
  }

  getBmob() {
    return Bmob
  }
  // 初始化
  init(sercretKey='', apiSafeCode='') {
    Bmob.initialize(sercretKey, apiSafeCode)
  }
  // 增
  insert_(table='', data={}) {
    return new Promise(function(resolve, reject) {
      var query = Bmob.Query(table)
      for (var key in data) {
        query.set(key, data[key])
      }
      query.save().then(res => resolve(res))
        .catch(err => reject(err))
    })
  }

  // 删
  delete_(table = '', objectId = '') {
    return new Promise(function(resolve, reject) {
      var query = Bmob.Query(table)
      query.destroy(objectId).then(res => resolve(res))
        .catch(err => reject(err))
    })
  }

  // 改
  update_(table='', objectId='', data={}) {
    return new Promise(function(resolve, reject) {
      var query = Bmob.Query(table)
      query.get(objectId).then(res => {
        for (var key in data) {
          res.set(key, data[key])
        }
        res.save().then(res => resolve(res))
        .catch(err => reject(err))
      })
    })
  }

  // 查找全部
  getAll (tableName='') {
    return new Promise(function(resolve, reject) {
      var query = Bmob.Query(tableName)
      query.find().then(res => resolve(res))
        .catch(err => reject(err))
    })
  }
  
  // 获取指定行
  get_(table='', objectId='') {
    return new Promise(function(resolve, reject) {
      var query = Bmob.Query(table)
      query.get(objectId).then(res => resolve(res))
        .catch(err => reject(err))
    })
  }
}
