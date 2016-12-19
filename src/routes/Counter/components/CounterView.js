import React, { Component, PropTypes } from 'react'
import Button from 'antd-mobile/lib/button/index.web'
import List from 'antd-mobile/lib/list/index.web'
import echarts, { line, tooltip } from 'echarts'
import './CounterView.scss'
const ButtonGroup = Button.Group

export default class CounterView extends Component {

  static propTypes = {
    counter     : PropTypes.object.isRequired,
    doubleAsync : PropTypes.func.isRequired,
    logtime     : PropTypes.func.isRequired,
    increment   : PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  enterLoading(e) {
    let self = this
    self.setState({ loading: true })
    self.props.doubleAsync(() => self.setState({ loading: false }))
  }

  componentDidMount () {
    let chartTheme = {
      tooltip : {
        trigger: 'axis'
      },
      grid: {
        top: 40,
        left: '3%',
        right: '4%',
        bottom: '6%',
        containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          splitLine: {
            lineStyle: {
              color: '#eee'
            }
          },
          boundaryGap : false
        }
      ],
      yAxis : [
        {
          type : 'value',
          splitLine: {
            lineStyle: {
              color: '#eee'
            }
          }
        }
      ]
    }
    echarts.init(document.getElementById('echart')).setOption(Object.assign(chartTheme, {
      legend: {
        data:['2015-05-05','2015-05-06','2015-05-07']
      },
      xAxis : [
        {
          data : ['6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00']
        }
      ],
      series : [
        {
          name:'2015-05-05',
          type:'line',
          stack: '总量',
          smooth: true,
          symbolSize: 6,
          areaStyle: {normal: {}},
          data:[120, 132, 101, 134, 90, 230, 210, 120, 132, 101]
        },
        {
          name:'2015-05-06',
          type:'line',
          stack: '总量',
          smooth: true,
          symbolSize: 6,
          areaStyle: {normal: {}},
          data:[220, 182, 191, 234, 290, 330, 310, 220, 182, 191]
        },
        {
          name:'2015-05-07',
          type:'line',
          stack: '总量',
          smooth: true,
          symbolSize: 6,
          areaStyle: {normal: {}},
          data:[120, 82, 91, 134, 190, 230, 210, 120, 82, 91]
        }
      ]
    }))
  }

  render() {
    let itemHeight = window.clientWidth * 360 / 750
    return (
      <div className="counter">
        <div className='row-content'>
          <div style={{width: '100%', height: `${itemHeight}px`}} id='echart'></div>
        </div>
        <div className='row-cnt'>
          <List>
            <List.Item
              extra={
                <Button type="primary" size="small" inline onClick={this.props.increment}>单次+1</Button>
              }
              multipleLine
            >
              数字单次增量
              <List.Item.Brief>增加结果：{this.props.counter.count}</List.Item.Brief>
            </List.Item>
            <List.Item
              extra={
                <Button type="ghost" size="small" inline loading={this.state.loading} onClick={e => this.enterLoading(e)}>延时异步加</Button>
              }
              multipleLine
            >
              数字叠加增量
              <List.Item.Brief>增加结果：{this.props.counter.count}</List.Item.Brief>
            </List.Item>
          </List>
        </div>
        <div className='row-cnt'>  
          <List>
            <List.Item
              extra={
                <Button type="primary" size="small" inline  onClick={this.props.logtime}>生成</Button>
              }
              multipleLine
            >
              数字不定增量
              <List.Item.Brief>增量结果：{this.props.counter.time}</List.Item.Brief>
            </List.Item>
          </List>
        </div>  
      </div>
    )
  }

}

