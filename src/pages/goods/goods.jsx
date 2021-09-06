import { Component } from "react";
import { View, Text } from "@tarojs/components";
import { observer, inject } from "mobx-react";
import { AtTabs, AtTabsPane } from "taro-ui";

import "./goods.scss";

@inject("store")
@observer
class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0,
    };
  }

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
  handleClick(value) {
    this.setState({
      current: value,
    });
  }
  // increment = () => {
  //   const { counterStore } = this.props.store
  //   counterStore.increment()
  // }

  // decrement = () => {
  //   const { counterStore } = this.props.store
  //   counterStore.decrement()
  // }

  // incrementAsync = () => {
  //   const { counterStore } = this.props.store
  //   counterStore.incrementAsync()
  // }

  render() {
    // const { counterStore: { counter } } = this.props.store
    return (
      <View className='index'>
        <Text>商品页</Text>
        <View>
          <AtTabs
            current={this.state.current}
            scroll
            height='500px'
            tabDirection='vertical'
            tabList={[
              { title: "天天特价" },
              { title: "9月上新" },
              { title: "幸福月饼" },
              { title: "儿童蛋糕" },
              { title: "幸福早餐" },
              { title: "超值套餐" },
              { title: "现烤面包" },
              { title: "袋装面包" },
              { title: "幸福西点" },
              { title: "幸福软点" },
              { title: "幸福の饮" },
              { title: "幸福の饼" },
              { title: "现做蛋糕" },
              { title: "幸福下午茶" },
            ]}
            onClick={this.handleClick.bind(this)}
          >
            <AtTabsPane
              tabDirection='vertical'
              current={this.state.current}
              index={0}
            >
              <View style='font-size:18px;text-align:center;height:200px;'>
                标签页一的内容
              </View>
            </AtTabsPane>
            <AtTabsPane
              tabDirection='vertical'
              current={this.state.current}
              index={1}
            >
              <View style='font-size:18px;text-align:center;height:200px;'>
                标签页二的内容
              </View>
            </AtTabsPane>
            <AtTabsPane
              tabDirection='vertical'
              current={this.state.current}
              index={2}
            >
              <View style='font-size:18px;text-align:center;height:200px;'>
                标签页三的内容
              </View>
            </AtTabsPane>
            <AtTabsPane
              tabDirection='vertical'
              current={this.state.current}
              index={3}
            >
              <View style='font-size:18px;text-align:center;height:200px;'>
                标签页四的内容
              </View>
            </AtTabsPane>
            <AtTabsPane
              tabDirection='vertical'
              current={this.state.current}
              index={4}
            >
              <View style='font-size:18px;text-align:center;height:200px;'>
                标签页5的内容
              </View>
            </AtTabsPane>
            <AtTabsPane
              tabDirection='vertical'
              current={this.state.current}
              index={5}
            >
              <View style='font-size:18px;text-align:center;height:200px;'>
                标签页6的内容
              </View>
            </AtTabsPane>
            <AtTabsPane
              tabDirection='vertical'
              current={this.state.current}
              index={6}
            >
              <View style='font-size:18px;text-align:center;height:200px;'>
                标签页7的内容
              </View>
            </AtTabsPane>
            <AtTabsPane
              tabDirection='vertical'
              current={this.state.current}
              index={7}
            >
              <View style='font-size:18px;text-align:center;height:200px;'>
                标签页8的内容
              </View>
            </AtTabsPane>
            <AtTabsPane
              tabDirection='vertical'
              current={this.state.current}
              index={8}
            >
              <View style='font-size:18px;text-align:center;height:200px;'>
                标签页9的内容
              </View>
            </AtTabsPane>
            <AtTabsPane
              tabDirection='vertical'
              current={this.state.current}
              index={9}
            >
              <View style='font-size:18px;text-align:center;height:200px;'>
                标签页10的内容
              </View>
            </AtTabsPane>
            <AtTabsPane
              tabDirection='vertical'
              current={this.state.current}
              index={10}
            >
              <View style='font-size:18px;text-align:center;height:200px;'>
                标签页11的内容
              </View>
            </AtTabsPane>
            <AtTabsPane
              tabDirection='vertical'
              current={this.state.current}
              index={11}
            >
              <View style='font-size:18px;text-align:center;height:200px;'>
                标签页12的内容
              </View>
            </AtTabsPane>
            <AtTabsPane
              tabDirection='vertical'
              current={this.state.current}
              index={12}
            >
              <View style='font-size:18px;text-align:center;height:200px;'>
                标签页13的内容
              </View>
            </AtTabsPane>
            <AtTabsPane
              tabDirection='vertical'
              current={this.state.current}
              index={13}
            >
              <View style='font-size:18px;text-align:center;height:200px;'>
                幸福下午茶的内容
              </View>
            </AtTabsPane>
          </AtTabs>
        </View>
      </View>
    );
  }
}

export default Index;
