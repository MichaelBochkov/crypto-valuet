import React from 'react'
import { useState } from 'react/cjs/react.development'
import './Menu.css'

function Menu(props) {
  const [active, setActive] = useState(null)

  return (
    <ul className='menu_list'>
      {props.menuItem.map((item, k) => {
        return (
          <li key={k} className={`menu_item ${active === k ? 'active' : ''}`} onClick={() => setActive(k)}>
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
