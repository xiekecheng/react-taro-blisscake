import { Component } from "react";
import { View, Text,Swiper, SwiperItem } from "@tarojs/components";
import { observer, inject } from "mobx-react";
// 引入 Swiper, SwiperItem 组件
// import {  } from '@tarojs/components'
import "./home.scss";

@inject("store")
@observer
class Index extends Component {
  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  componentDidShow() {
    console.log("显示了");
  }

  componentDidHide() {
    console.log("隐藏了");
  }

  increment = () => {
    const { counterStore } = this.props.store;
    counterStore.increment();
  };

  decrement = () => {
    const { counterStore } = this.props.store;
    counterStore.decrement();
  };

  incrementAsync = () => {
    const { counterStore } = this.props.store;
    counterStore.incrementAsync();
  };

  render() {
    // const { counterStore: { counter } } = this.props.store
    return (
      <View className='my-home'>
        {/* <Text>{counter}</Text>
        <Text>首页</Text> */}
        <Swiper
          className='test-h'
          // indicatorColor='#999'
          indicatorActiveColor='#333'
          // vertical
          circular
          // indicatorDots
          autoplay
        >
          <SwiperItem>
            <View className='demo-text-1'>1</View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-2'>2</View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-3'>3</View>
          </SwiperItem>
        </Swiper>
      </View>
    );
  }
}

export default Index;
