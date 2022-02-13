import React from 'react'
import MenuLi from '../MenuLi/MenuLi'
import './Menu.scss'

const Menu = ({menuOpen, setMenuOpen}) => {

    const menuList = [
        {
            name:"About",direction:"#intro"
        },
        {
            name:"Porfolio", direction:"#porfolio"
        },
        {
            name:"Skills", direction:"#skills"
        },
        {
            name:"Contact", direction:"#contact"
        }
    ]

    const showList = menuList.map((e, index)=>{
        return(<MenuLi key={index} direction={e.direction} name={e.name} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>)
    })

  return (
    <div className={"menu " +(menuOpen && "active")}>
        <ul>
            {showList}
        </ul>
    </div>
  )
}

export default Menu