import { View } from "@tarojs/components";
// import React from "react";

import "./detail.scss";

const detail = () => {
  const handleAddCart = ()=>{
    console.log('加入购物车');
  }
  const handleCart = ()=>{
    console.log('去购物车');
  }

  const handleBuy = ()=>{
    console.log('立即购买');
  }
  return (
    <View className='my-detail'>
      {/* 底部导航栏 */}
      <View className='tabbar'>
        <View className='at-row'>
          <View onClick={handleCart} className='at-col cart'>购物车</View>
          <View onClick={handleBuy} className='at-col buy'>立即购买</View>
          <View onClick={handleAddCart} className='at-col addCart'>加入购物车</View>
        </View>
      </View>
    </View>
  );
};

export default detail;
