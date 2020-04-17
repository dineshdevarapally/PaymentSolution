import React from 'react';
import Logo from '../../assets/logo.png';
import './header.css';

export default function index() {
    return (
        <header className='root'>
            <nav >
                <div className='headerContainer'>
                    <div className='logo'>
                        <img src={Logo} />
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
