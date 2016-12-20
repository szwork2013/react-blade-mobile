import React, { Component, PropTypes } from 'react'
import Button from 'antd-mobile/lib/button/index.web'
import List from 'antd-mobile/lib/list/index.web'
import InputItem from 'antd-mobile/lib/input-item/index.web'
import { IndexLink, Link } from 'react-router'
import ListTable from './ListView'
import './UserView.scss'

export default class UserView extends Component {
  static propTypes = {
    user        : PropTypes.object.isRequired,
    getuidAsync : PropTypes.func.isRequired,
    clear       : PropTypes.func.isRequired
  }

  constructor (props, context) {
    super(props, context)
    this.state = { 
      uidVal: this.props.user.uid,
      loadUid: false,
      groups: [
        {
          name: '杭州银行',
          city: '杭州',
          time: '2016-12-01'
        },
        {
          name: '宁波银行',
          city: '宁波',
          time: '2016-12-02'
        },
        {
          name: '上海银行',
          city: '上海',
          time: '2016-12-03'
        },
        {
          name: '南昌银行',
          city: '南昌',
          time: '2016-12-04'
        },
        {
          name: '广发银行',
          city: '广州',
          time: '2016-12-05'  
        }  
      ]
    }
  }

  asynsGetUid () {
    this.setState({
      loadUid: true
    })
    this.props.getuidAsync((data) => {
      this.state.uidVal = data.uid
      this.setState({
        loadUid: false
      })
    })
  }

  clearUid () {
    this.props.clear()
    this.setState({
      uidVal: 'default'
    })
  }

  render() {
    let groups = this.state.groups
    let list = groups.map(
      (item, i) => {
        return (
          <tr key={i}>
            <td>{item.name}</td>
            <td>{item.city}</td>
            <td>{item.time}</td>
          </tr> 
        ) 
      }
    )
    return (
      <div className="user">
        <div className='row-content' style={{padding: '0.2rem'}}>
          <h4 style={{margin: '0.2rem 0'}}>生成列表的两种方式</h4>
          <h5 style={{margin: '0.2rem 0'}}>节点循环</h5>
          <div className='table'>
            <table>
              <thead>
                <tr>
                  <th>银行名称</th>
                  <th>所在城市</th>
                  <th>注册时间</th>
                </tr>
              </thead>
              <tbody>
                {list}
              </tbody>
            </table>
          </div>
          <h5 style={{margin: '0.2rem 0'}}>模板嵌套</h5>
          <ListTable groups={groups}/>
        </div>

        <List>
          <InputItem
            placeholder="点击获取UID"
            editable={false}
            value={this.state.uidVal} 
          >UID</InputItem>
        </List>
        <div style={{padding: '0.3rem', textAlign: 'center'}}>
          <Button type="ghost" inline onClick={e => this.clearUid()} style={{marginRight: '0.3rem'}}>
            设置默认UID
          </Button>
          <Button type="primary" inline loading={this.state.loadUid} onClick={e => this.asynsGetUid()}>
            同步获取UID
          </Button>
        </div>

        <div className='row-content'>
          <div className='secTab'>
            <IndexLink to='/user' activeClassName='active'>
              账户信息完善
            </IndexLink>
            <Link to='/user/review' activeClassName='active'>
              账户信息一览
            </Link>
          </div>
          { this.props.children }
        </div>
      </div>
    )
  }
}