import React, { PropTypes } from 'react'

const Item = ({ name, city, time }) => (
  <tr>
    <td>{name}</td>
    <td>{city}</td>
    <td>{time}</td>
  </tr>
)

Item.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
}

export default Item
