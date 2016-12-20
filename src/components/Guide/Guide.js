import React, { Component } from 'react'
import Icon from 'antd-mobile/lib/icon/index.web'
import Toast from 'antd-mobile/lib/toast/index.web'
import { IndexLink, Link } from 'react-router'
import './Guide.scss'

const PlaceHolder = (props) => (
  <div style={{
    backgroundColor: '#ebebef',
    color: '#bbb',
    textAlign: 'center',
    height: '0.6rem',
    lineHeight: '0.6rem',
    width: '100%'
  }} {...props}
  >Item</div>
)

export default class Guide extends Component {
  constructor(props) {
    super(props)
    this.loadingPage.bind(this)
  }

  loadingPage () {
    Toast.loading('加载中...', 10, () => {
      Toast.fail('加载失败', 1)
    })
  }

  render() {
    return (
      <div className='guide'>
        <div className='gideBar'>
          <IndexLink to='/' activeClassName='active' onClick={this.loadingPage}>
            <Icon type="desktop" />
            <div className='label'>首页</div>
          </IndexLink>
          <Link to='/counter' activeClassName='active' onClick={this.loadingPage}>
            <Icon type="bar-chart" />
            <div className='label'>统计</div>
          </Link>
          <Link to='/user' activeClassName='active' onClick={this.loadingPage}>
            <Icon type="setting" />
            <div className='label'>账户</div>
          </Link>
          <Link to='/nofound' activeClassName='active' onClick={this.loadingPage}>
            <Icon type="search" />
            <div className='label'>空页面</div>
          </Link>
        </div>
      </div>
    )
  }  
}
