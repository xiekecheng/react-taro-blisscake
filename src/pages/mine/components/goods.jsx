import { View } from "@tarojs/components";

const goods = () => {
  return (
    <View className='at-row__justify--between'>
      <View className='at-col at-col-5'>左右排列</View>
      <View className='at-col at-col-5'>Between</View>
    </View>
  );
};

export default goods;
