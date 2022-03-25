// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
// var Bomb = require('./bomb.js');
import Bomb from './bomb.js';
let o = new Bomb({sercretKey:"8a7e35df0e10c1ec", apiSafeCode:"000419"});
// var a = new Bomb({sercretKey:"8a7e35df0e10c1ec", apiSafeCode:"000419"})
// 查询指定表中所有数据
// o.getAll('goods').then((value) => {
//     console.log(value)
// })
// 查询指定表指定行
// o.get_('user','WGZS333L').then((value) => {
//     console.log(value);
// })

// 给指定表插入一行数据
// o.insert_('test',{name:'test'}).then((value) => {
//         console.log(value);
//     });

// 给指定表删除一行数据
// o.delete_('test','2a0aa780f0').then((value) => {
//     console.log(value);
// });

// 给指定表指定行修改指定列的数据
// o.update_('test','8d8b468c62',{name:'333333333'}).then((value) => {
//     console.log(value)
// })