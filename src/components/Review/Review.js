import React, { Component } from 'react'
import { Collapse, Table } from 'antd'
const Panel = Collapse.Panel

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

function callback(key) {
  console.log(key)
}

const columns = [{
  title: '邮箱',
  dataIndex: 'email',
  key: 'email'
}, {
  title: '密码',
  dataIndex: 'password',
  key: 'password'
}, {
  title: '密码确认',
  dataIndex: 'confirm',
  key: 'confirm'
}, {
  title: '手机号码',
  dataIndex: 'phone',
  key: 'phone'
}, {
  title: '昵称',
  dataIndex: 'nickname',
  key: 'nickname'
}, {
  title: '验证码',
  dataIndex: 'captcha',
  key: 'captcha'
}, {
  title: '地址',
  key: 'residence',
  dataIndex: 'residence',
  render: (text) => (
    <span>
      <span>{text[0]}</span>/
      <span>{text[1]}</span>/
      <span>{text[2]}</span>
    </span>
  )
}]

export default class Review extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    let { regData } = this.props
    let dataList = (regData) => (
      <div>
        <Table columns={columns} dataSource={[regData]} />
      </div>
    ) 

    let noData = () => (
      <div style={{width: '100%', textAlign: 'center', fontSize: '0.32rem', padding: '0.6rem 0'}}>
        暂未填写信息！
      </div>
    )

    return (
      <div className='review'>
        {regData ? dataList(regData) : noData()}
      </div>
    )
  }

}
