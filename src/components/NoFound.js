import React, { Component } from 'react'
import { message } from 'antd'
import Result from 'antd-mobile/lib/result/index.web'
import Toast from 'antd-mobile/lib/toast/index.web'

export default class NotFound extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  componentWillMount() {
    Toast.info('加载失败!', 1);
    let timer = setTimeout(() => {
      this.context.router.replace('/')
      clearTimeout(timer)
    }, 3000)
  }

  render () {
    return (
      <Result
        imgUrl="https://zos.alipayobjects.com/rmsportal/NRzOqylcxEstLGf.png"
        title="找不到该页面！"
        message="未找到该页面，3秒后返回首页！"
      />
    )
  }
}
