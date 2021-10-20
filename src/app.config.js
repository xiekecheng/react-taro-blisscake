/*
 * @Author: xiekc
 * @Date: 2021-09-05 01:32:06
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-09-06 13:19:25
 * @FilePath: /react-taro-blisscake/src/app.config.js
 */
export default {
  pages: [
    'pages/mine/mine',
    'pages/home/home',
    'pages/goods/detail/detail',


    'pages/index/index',
    'pages/goods/goods',

    'pages/order/order',
    'pages/cart/cart'


    
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar:{
    color:'#AFAFAF',
    selectedColor:'#CD0D2D',
    backgroundColor	:'#FFFFFF',
    borderStyle:'black',
    list:[{
      pagePath:'pages/home/home',
      text:'首页',
      iconPath:'assets/images/home.png',
      selectedIconPath:'assets/images/home_s.png'
    },{
      pagePath:'pages/goods/goods',
      text:'商品',
      iconPath:'assets/images/goods.png',
      selectedIconPath:'assets/images/goods_s.png'
    },{
      pagePath:'pages/cart/cart',
      text:'购物车',
      iconPath:'assets/images/cart.png',
      selectedIconPath:'assets/images/cart_s.png'
    },{
      pagePath:'pages/order/order',
      text:'订单',
      iconPath:'assets/images/order.png',
      selectedIconPath:'assets/images/order_s.png'
    },{
      pagePath:'pages/mine/mine',
      text:'我的',
      iconPath:'assets/images/mine.png',
      selectedIconPath:'assets/images/mine_s.png'
    },]
  }
}
