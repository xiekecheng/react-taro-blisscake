import { View } from "@tarojs/components";
import React from "react";

import "./detail.scss";

const detail = () => {
  return (
    <View className='my-detail'>
      {/* 底部导航栏 */}
      <View className='tabbar'>
        <View className='at-row'>
          <View className='at-col'>购物车</View>
          <View className='at-col'>
						立即购买
					</View>
          <View className='at-col'>
						加入购物车
					</View>
        </View>
      </View>
    </View>
  );
};

export default detail;
