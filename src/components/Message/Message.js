import Button from 'antd-mobile/lib/button/index.web'
import List from 'antd-mobile/lib/list/index.web'
import InputItem from 'antd-mobile/lib/input-item/index.web'
import React, { Component, PropTypes } from 'react'
import MessageForm from './MessageForm'

export default class Message extends Component {
  
  constructor (props) {
    super(props)
    this.state = { inputVal: '' }
  }

  render() {
    let { mine, setname, setRegData, regData } = this.props
    return (
      <div className='message'>
        <List>
          <InputItem
            placeholder="请输入用户名字"
            name="inputVal" 
            value={this.state.inputVal} 
            onChange={(e) => this.setState({inputVal: e})}
          >全局名</InputItem>
        </List>
        <div style={{padding: '0.3rem', textAlign: 'center'}}>
          <Button 
            type="ghost" 
            onClick={(e) => setname(this.state.inputVal)} 
            style={{marginRight: '0.3rem'}}
          >
            设置名字
          </Button>
        </div>
        <MessageForm 
          mineName={mine} 
          setRegData={setRegData} 
        />
      </div>
    )
  }
}