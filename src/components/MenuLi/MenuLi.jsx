import React from 'react'

const MenuLi = ({name, direction, menuOpen, setMenuOpen}) => {
  return (
    <li onClick={()=>{setMenuOpen(!menuOpen)}}>
        <a href={direction}>
            {name}
        </a>
    </li>
  )
}

export default MenuLi