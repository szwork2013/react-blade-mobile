import React, { Component } from 'react'
import Carousel from 'antd-mobile/lib/carousel/index.web'
import Grid from 'antd-mobile/lib/grid/index.web'
import List from 'antd-mobile/lib/list/index.web'
import Toast from 'antd-mobile/lib/toast/index.web'
import './HomeView.scss'
import v1Image from '../assets/v1.jpg'
import v2Image from '../assets/v2.jpg'
import v3Image from '../assets/v3.jpg'
import v4Image from '../assets/v4.jpg'

const Item = List.Item
const Brief = Item.Brief

const data = Array.from(new Array(8)).map((_val, i) => ({
  icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
  text: `项目${i}`
}))

// 每个组件还有 componentWillMount，componentDidMount，componentWillUpdate，componentDidUpdate，componentWillUnmount 五种方法

export default class HomeView extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentWillMount () {
    Toast.hide()
  }
    
  render () {
    let itemHeight = window.clientWidth * 445 / 960
    return (
      <div className="home">
        <Carousel className="my-carousel" autoplay infinite>
          <div className="item" style={{height: `${itemHeight}px`}}><img alt='v1' src={v1Image} /></div>
          <div className="item" style={{height: `${itemHeight}px`}}><img alt='v2' src={v2Image} /></div>
          <div className="item" style={{height: `${itemHeight}px`}}><img alt='v3' src={v3Image} /></div>
          <div className="item" style={{height: `${itemHeight}px`}}><img alt='v4' src={v4Image} /></div>
        </Carousel>
        <Grid data={data} />
        <List renderHeader={() => '左侧带图片'}>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            arrow="horizontal"
            onClick={() => {}}
          >我的钱包</Item>
          <Item thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png">我的花销占比</Item>
        </List>
      </div>
    )
  }

}  

