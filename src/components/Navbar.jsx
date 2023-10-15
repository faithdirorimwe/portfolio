 import {  NavLink } from 'react-router-dom';
 import { useState } from 'react';
 import { useEffect } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (window.innerWidth >= 768) {
          setMenuOpen(true);
        }
      }, []);
    
    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
      };

    return ( 
      <header>
        <div className="navbar">
            <div className="navbar-menu-icon" onClick={handleMenuClick}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            
            <ul className={`menu ${menuOpen ? "show" : ""}`}>
            <li className='menu-item'><NavLink to = "/"  >Home</NavLink></li>
            <li className='menu-item'><NavLink to = "/About"  >About Me</NavLink></li>
            <li className='menu-item'><NavLink to = "/Work"  >My Work</NavLink></li>
            <li className='menu-item'><NavLink to = "/Contact"  >Contact</NavLink></li>
            </ul>
        </div>
        </header>
     );
}
 
export default Navbar;