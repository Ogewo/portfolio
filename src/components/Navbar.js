import React, {useState} from 'react'
import {FaSearch,FaUser,FaShoppingBag} from 'react-icons/fa'
import { menuItems } from './menu'

function Navbar() {
    const [showForm, setShowForm] = useState(false)
    const handleNavLinkHover = () => {
        setShowForm(true)
    }
    const handleNavLeave = () => {
        setShowForm(false)
    }

   return(
    <nav>
       {menuItems.map((item, index) => (
        <div key={index} className='nav-item'>
            {item.title}
                {item.subMenu && (
                    <ul className={`sub-menu ${showForm ? 'active' : ''}`}>
                        {item.subMenu.map((subItem, subIndex) => (
                            <div className='sub-item'><li key={subIndex} className=''>
                                <strong>{subItem.title}</strong>
                                <div className='sub-items'>{subItem.subtitle}</div>
                            </li></div>
                        ))}
                    </ul>
                )}
        </div>
       ))}
    </nav>
   )
}
export default Navbar