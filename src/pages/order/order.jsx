import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'

import './order.scss'


@inject('store')
@observer
class Index extends Component {
  componentWillMount () { console.log('componentWillMount');}

  componentDidMount () { console.log('componentDidMount');}

  componentWillUnmount () {console.log('componentWillUnmount'); }

  componentDidShow () {
    console.log('显示了');
   }

  componentDidHide () { 
    console.log('隐藏了');
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

  render () {
    // const { counterStore: { counter } } = this.props.store
    return (
      <View className='index'>
        <Text>订单</Text>
      </View>
    )
  }
}

export default Index
