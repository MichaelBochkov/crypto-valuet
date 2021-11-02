import React, { useState } from 'react'
import './Menu.css'

function Menu(props) {
  const [active, setActive] = useState(0)

  return (
    <ul className='menu_list'>
      {props.menuItem.map((item, index) => {
        return (
          <li key={index} className={`menu_item ${active === index ? 'active' : ''}`} onClick={() => setActive(index)}>
            {item.itemSvg}
            <a href='/'>
              {item.itemName}
            </a>
            <hr />
          </li>
        )
      })}
    </ul>
  )
}

export default Menu
