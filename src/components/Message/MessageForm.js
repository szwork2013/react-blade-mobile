import React, { Component } from 'react'
import List from 'antd-mobile/lib/list/index.web'
import InputItem from 'antd-mobile/lib/input-item/index.web'
import Button from 'antd-mobile/lib/button/index.web'
import { browserHistory } from 'react-router'

export default class MessageForm extends Component {

  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      confirm: '',
      phone: '',
      nickname: ''
    }

  }

  submitForm () {
    let fm = [this.state]
    this.props.setRegData(fm)
    browserHistory.push('/user/review')
  }

  render() {
    return (
      <div className='messageForm'>
        <List>
          <InputItem
            placeholder="请输入昵称"
            name="nickname"
            defaultValue = {this.props.mineName}
            onChange={(e) => this.setState({nickname: e})}
          >昵称</InputItem>
          <InputItem
            placeholder="请输入邮箱"
            name="email" 
            value={this.state.email} 
            onChange={(e) => this.setState({email: e})}
          >邮箱</InputItem>
          <InputItem
            placeholder="请输入密码"
            type="password"
            name="password" 
            clear
            value={this.state.password} 
            onChange={(e) => this.setState({password: e})}
          >密码</InputItem>
          <InputItem
            placeholder="请输入密码"
            type="password"
            name="confirm" 
            clear
            value={this.state.confirm} 
            onChange={(e) => this.setState({confirm: e})}
          >确认密码</InputItem>
          <InputItem
            placeholder="手机号码"
            name="phone" 
            value={this.state.phone} 
            onChange={(e) => this.setState({phone: e})}
          >手机号码</InputItem>
        </List>
        <div style={{padding: '0.2rem 0.2rem 0'}}>
          <Button type="primary" onClick={(e) => this.submitForm()}>
            提交
          </Button>
        </div>
      </div>
    )
  }
}

