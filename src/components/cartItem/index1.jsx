import Taro, { Component } from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import { View, Image, Button, Checkbox,Label ,Text,CheckboxGroup } from '@tarojs/components';
import { getCartList, delCartItem,getTotalMoney } from './service';

import './index.scss';

class Cart extends Component {
  config = {
    navigationBarTitleText: '购物车',
  };

  constructor() {
    super(...arguments)
    this.state = {
      cartItems: [],//当前购物车列表
      checkAll:false,//是否全选
      totalMoney:0,
      arr:[]             //购物车每个item的d
    }
  }

  onDeleteClothing = e => {
    const id = e.currentTarget.dataset.id;
    Taro.showModal({
      content: '是否删除该商品？',
    }).then(res => {
      if (res.confirm) {
        delCartItem(id).then(() => {
          this.setState({
            checkAll:false
          });
          // this.loadCartItems()
          Taro.navigateTo({
            url: `/pages/cart/index`,
          })
        })
      }
    });
  };

  componentDidMount = () => {
    // 加载商品列表
    this.loadCartItems()
  };

  componentDidShow() {
    // 设置衣袋小红点
    if (this.props.cartItems.length > 0) {
      Taro.setTabBarBadge({
        index: 1,
        text: String(this.props.cartItems.length),
      });
    } else {
      Taro.removeTabBarBadge({
        index: 1,
      });
    }
  }

  goHome() {
    if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
      Taro.navigateTo({
        url: '/pages/home/index',
      });
    } else {
      Taro.switchTab({
        url: '/pages/home/index',
      });
    }
  }

  loadCartItems() {
    getCartList().then(res => {
      res.data.map((item,index)=>{
        item.checked = false;
      })
      this.setState({
        cartItems: res.data
      })
    })
  }

  buy() {
    console.log(this.state.arr)
    let ids = JSON.stringify(this.state.arr)
    if(!ids.length){
      Taro.showToast({
        title: '请选择下单商品~~~',
        icon: 'none',
      });
    }else{
    Taro.navigateTo({
      url: `/pages/goOrder/index?id=${ids}`,
    })
  }
  }
  loadCartMoney(cartItemIds){
    getTotalMoney(cartItemIds).then(res => {
      this.setState({
        totalMoney:res.data.totalMoney
      })
    })
  }
  checkAll=(e)=>{
    // console.log(e.target.checked)
    //全选逻辑
    var items = [...this.state.cartItems]
    //checked取反
    items.map((item,index)=>{
      if(e.target.checked){
        items[index].checked = true
      }else{
        items[index].checked = false
      }
      this.setState({
        cartItems:items,
        checkAll:true
      })
    })

    let arr =[];
    for (let elem of this.state.cartItems.values()) {
      if(elem.checked){
        arr.push(elem.id);
      }
    }
    
    this.setState({
      arr:arr
    })

    console.log(arr)
    this.loadCartMoney(arr.join(','));
  }
  
  changeState=(e)=>{
    console.log(e.target.value)
    //单个选择  用cartItems作为参照  更改状态
    var items = [...this.state.cartItems]

    if(!e.target.checked){
      items.map((item,index)=>{
          if(e.target.value == item.id){
            item.checked = false;
          }
      })
    }else{
      items.map((item,index)=>{
        if(e.target.value == item.id){
          item.checked = true;
        }
      })
    }
    
    this.setState({
      cartItems:items,
      checkAll:false
    })
    // console.log(this.state.cartItems)
    // console.log(this.state.checkAll)
    let nums = 0;
    for (let elem of this.state.cartItems.values()) {
      if(elem.checked){
        nums += 1;
        if(nums == this.state.cartItems.length){       //如果等于length 代表单选中  已经全部选中
          this.setState({
            checkAll:true
          })
        }else{
          this.setState({
            checkAll:false
          })
        }
      }
    }

    let arr =[];
    for (let elem of this.state.cartItems.values()) {
      if(elem.checked){
        arr.push(elem.id);
      }
    }
    this.setState({
      arr:arr
    })

    console.log(arr)
    this.loadCartMoney(arr.join(','));
  }
  handleClick = e => {
    Taro.navigateTo({
      url: `/pages/detail/index?id=${e.currentTarget.dataset.id}`,
    })
  }
  render() {
    const { cartItems,checkAll,arr,totalMoney} = this.state;
    const isH5 = Taro.getEnv() === Taro.ENV_TYPE.WEB;
    return (
      <View className="cart-page">
        {cartItems.length == 0 ? (
          <View className="empty">
            <Image
              mode="widthFix"
              src="http://static-r.msparis.com/uploads/b/c/bcffdaebb616ab8264f9cfc7ca3e6a4e.png"
            />
            <Button type="primary" className="am-button" onClick={this.goHome}>
              立即去挑选商品
            </Button>
          </View>
        ) : (
          <View className="isLogin">
              <View className="ClothingsItem-page">
                    <View>
                      <Checkbox onChange={this.checkAll} className="checkbox-list__checkbox" value='flyku' checked={checkAll}></Checkbox>&nbsp;&nbsp;&nbsp;全选
                    </View>
                   <CheckboxGroup onChange={this.changeState}>
                    <View className="WhiteSpace" />
                    <View className="hr" />
                    {cartItems.map(item => (
                      <View key={item.productId} >
                        <Checkbox className="checkbox-list__checkbox" value={item.id} checked={item.checked}></Checkbox>
                        <View className="WhiteSpace" />
                        <View className="clothing">
                          <View className="clothing"
                            data-id={item.productId} 
                            onclick={this.handleClick}>
                            <View className="shop-img">
                              <Image mode="widthFix" src={`${item.image}`} />
                            </View>
                            <View className="content">
                              <View className="title p">{item.productName}</View>
                              <View className="info p">数量 {item.count}</View>
                              <View className="size p">
                                {`${item.productAttributeL1Name} | ${item.productAttributeL2Name}`}
                              </View>
                            </View>
                          </View>
                          <View className="edit">
                            <View
                              className="iconfont icon-delete"
                              data-id={item.id}
                              onClick={this.onDeleteClothing}
                            />
                          </View>
                        </View>
                        <View className="hr" />
                      </View>
                    ))}
                    </CheckboxGroup>
              </View>
              <View className="bottom-count" style={!isH5 && 'bottom:0;'}>
                <View className="fj">
                  <View>
                    合计：
                    <Text className={!cartItems.length ? 'disabled price' : 'price'}>
                      {totalMoney}元
                    </Text>
                  </View>
                  <Button
                    className="cart-btn"
                    onClick={this.buy.bind(this)}
                    disabled={!cartItems.length}
                  >
                    去结算
                  </Button>
                  <View className="info">
                    如有失效商品，建议删除，以免占用购物车总数
                  </View>
                </View>
              </View>
          </View>
        )}
      </View>
    );
  }
}

export default Cart;
