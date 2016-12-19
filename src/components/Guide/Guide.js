import React, { Component } from 'react'
import Icon from 'antd-mobile/lib/icon/index.web'
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
    this.state = {
    }
  }

  componentDidMount () {

  }

  render() {
    return (
      <div className='guide'>
        <div className='gideBar'>
          <IndexLink to='/' activeClassName='active'>
            <Icon type="desktop" />
            <div className='label'>首页</div>
          </IndexLink>
          <Link to='/counter' activeClassName='active'>
            <Icon type="bar-chart" />
            <div className='label'>统计</div>
          </Link>
          <Link to='/user' activeClassName='active'>
            <Icon type="setting" />
            <div className='label'>账户</div>
          </Link>
          <Link to='/nofound' activeClassName='active'>
            <Icon type="search" />
            <div className='label'>空页面</div>
          </Link>
        </div>
      </div>
    )
  }  
}
