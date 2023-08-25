import React from 'react'
import {FaSearch,FaUser,FaShoppingBag} from 'react-icons/fa'
import { menuItems } from './menu'
import './NavbarStyles.css'
function Navbar() {
   return(
    <nav>         
        {/* <div>
        <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Men</a></li>
            <li><a href='#'>Women</a></li>
            <li><a href='#'>Pages</a></li>
            <li><a href='#'>Blog</a></li>
         </ul>
        </div>         
         <h2>Salehub</h2>
         <div><FaSearch className='icon'/><a href='#'>Search</a></div> 
         <div id='icons'>
         <div><FaUser className='icon'/><a href='#'>Account</a></div>
         <div><FaShoppingBag className='icon'/><a href='#'>My Cart</a></div>
         </div> */}

       {menuItems.map((item, index) => (
        <div key={index} className='nav-item'>
            {item.title}
            {item.subMenu && (
                <ul className='sub-menu'>
                    {item.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex} className='sub-item'>
                            <strong>{subItem.title }</strong>
                            {subItem.subtitle}
                        </li>
                    ))}
                </ul>
            )}
        </div>
       ))}
    </nav>
   )
}
export default Navbar