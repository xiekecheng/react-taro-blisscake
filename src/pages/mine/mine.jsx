import { Component } from "react";
import { View, Text } from "@tarojs/components";
import { observer, inject } from "mobx-react";
// import Taro, { Component, Config } from '@tarojs/taro'
import { AtGrid } from "taro-ui";
import "./mine.scss";

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

  render() {
    // const { counterStore: { counter } } = this.props.store
    return (
      <View className='my-mine'>
        {/* <View className='member at-row at-row-wrap'>
            <View className='at-col'>A</View>
            <View className='at-col'>B</View>
            <View className='at-col'>C</View>
        </View> */}

        {/* 我的服务 Start */}
        <View className='my-service'>
          <Text>我的服务</Text>
          <AtGrid
            columnNum={4}
            hasBorder={false}
            data={[
              {
                image:
                  "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png",
                value: "历史订单",
              },
              {
                image:
                  "https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png",
                value: "拼团订单",
              },
              {
                image:
                  "https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png",
                value: "组团充值",
              },
              {
                image:
                  "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png",
                value: "幸福卡",
              },
              {
                image:
                  "https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png",
                value: "联系客服",
              },
              {
                image:
                  "https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png",
                value: "建行钱包",
              },
            ]}
          />
        </View>
        {/* 我的服务 End */}
        <Text>为你推荐</Text>
        <View>
          
        </View>
      </View>
    );
  }
}

export default Index;
