import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '菜单'
  }

  items = [
    {
      title: '分享',
      navigation: '/pages/share/index'
    },
    {
      title: '左滑删除',
      navigation: '/pages/slide/index'
    },
    {
      title: '瀑布流',
      navigation: '/pages/waterFall/index'
    },
    {
      title: '骨架屏',
      navigation: '/pages/skeletonPage/index'
    }
  ];
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  jumpToPage (item) {
    Taro.navigateTo({
      url: item.navigation
    });
  }

  render () {
    return (
      <View className='menu'>
        {
          this.items.map((item, index) => (
            <View className='menu-item' onClick={this.jumpToPage.bind(this, item)}>{index + 1}-{item.title}</View>
          ))
        }
      </View>
    )
  }
}
