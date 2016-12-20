import React, { Component } from 'react'
import Result from 'antd-mobile/lib/result/index.web'
import Toast from 'antd-mobile/lib/toast/index.web'

export default class NotFound extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    this.state = { second: 3 }
  }

  componentWillMount () {
    Toast.hide()
  }

  componentDidMount () {
    Toast.info('加载失败!', 1)
    let self = this

    let counter = () => {
      let t = this.state.second
      if (t <= 0) {
        this.context.router.replace('/')
        return
      } else {
        t--
      }
      self.timer = setTimeout(() => {
        if (self.setState) {
          self.setState({second: t})
        } else {
          clearTimeout(self.timer)
        }
        clearTimeout(self.timer)
        counter()
      }, 1000)
    }

    counter()

  }

  componentWillUnmount () {
    clearTimeout(this.timer)
  }

  render () {
    return (
      <Result
        imgUrl="https://zos.alipayobjects.com/rmsportal/NRzOqylcxEstLGf.png"
        title="找不到该页面！"
        message={`未找到该页面，${this.state.second}秒后返回首页！`}
      />
    )
  }
}
