import React from 'react';
import NavLink from './NavLink';

const Header = () => {
    return (
        <header>
            <div className='header'>
                <div className='header-logo'>
                    <div className='logo-letter'>
                        <span id='shadow-letter'>P</span>
                        <span id='main-letter'>P</span>
                    </div>
                    <div className='logo-letter'>
                        <span id='shadow-letter'>K</span>
                        <span id='main-letter'>K</span>
                    </div>
                </div>
                <div className='nav-links'>
                    <ul>
                        <NavLink heading='home' />
                        <NavLink heading='work' />
                        <NavLink heading='about' />
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
