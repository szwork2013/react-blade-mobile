import React from 'react'
import Guide from 'COMPONENT/Guide'
import 'STYLE/normalize.css'
import 'STYLE/antd-mobile.less'
import 'STYLE/core.scss'
import './CoreLayout.scss'

// 构建页面主视图
export const CoreLayout = ({ children }) => (
  <div className='container'>
	<div className='core-layout'>
      {children}
    </div>
  	<Guide />
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
