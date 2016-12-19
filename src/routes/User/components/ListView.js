import React, { PropTypes } from 'react'
import Item from './ItemView'

const List = ({ groups }) => (
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
        {groups.map((item, i) =>
	      <Item
	        key={i}
	        {...item}
	      />
	    )}
      </tbody>
    </table>  
  </div>  
)

List.propTypes = {
  groups: PropTypes.array.isRequired
}

export default List
