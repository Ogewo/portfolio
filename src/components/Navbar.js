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

         <ul className='menus'>
            {
                menuItems.map((menu, index)=>{
                    const depthLevel = 0;
                    return <menuItems items={menu} key={index} depthLevel={depthLevel} />
                })
            }
         </ul>
    </nav>
   )
}
export default Navbar