import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import LogoHover from '../../assets/logohover.png';
import './header.css';

 const Header = () => {
   const [isHover, setisHover] = useState(false)

   return (
        <header className='root'>
            <nav >
                <div className='headerContainer'>
                    <div className='logo'>
                        <img 
                        onMouseOver={() => setisHover(!isHover)} 
                        onMouseOut={() => setisHover(!isHover)} 
                        src={isHover ? LogoHover : Logo} />
                    </div>
                    <div className='headerItem'>
                        <ul className="navigation">
                            <li>
                                <a>Make Payment</a>
                            </li>
                            <li>
                                <a>Our Payment Solutions</a>
                            </li>
                            <li>
                                <a>Why AllPaid</a>
                            </li>
                        </ul>
                        <div className="navigation">
                            <button> Sign up</button>
                            <button> Sign in</button>
                            <a>Help</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
