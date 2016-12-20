import React, { Component } from 'react'
import Button from 'antd-mobile/lib/button/index.web'
import Table from 'antd-mobile/lib/table/index.web'

const columns = [
  { title: '昵称', dataIndex: 'nickname', key: 'nickname' },
  { title: '邮箱', dataIndex: 'email', key: 'email' },
  { title: '密码', dataIndex: 'password', key: 'password' },
  { title: '手机号码', dataIndex: 'phone', key: 'phone' }
]

export default class Review extends Component {

  render() {
    let { router, regData } = this.props

    let dataList = (data) => (
      <Table
        columns={columns}
        dataSource={data}
      />
    ) 

    let noData = () => (
      <div style={{width: '100%', textAlign: 'center', fontSize: '0.32rem', padding: '0.6rem 0'}}>
        暂未填写信息！
      </div>
    )

    return (
      <div className='review' style={{padding: '0.2rem 0.2rem 0'}}>
        {regData ? dataList(regData) : noData()}
        <Button type="primary" onClick={router.goBack} style={{marginTop: '0.2rem'}}>
          返回上一页
        </Button>
      </div>
    )
  }

}
