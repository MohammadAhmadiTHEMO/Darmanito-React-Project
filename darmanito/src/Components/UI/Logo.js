import React from 'react';
import logo from '../../Assets/Images/logo.svg';
import 'tachyons';

const Logo = () => {
    return (
            <div className='logo'>
                <img src={logo} alt='Darmanito-Logo' href='/'></img>
                <div className='logoItems'>
                    <p className='logoTittle f4 b'> درمانیتو </p>
                    <p className='logoText f6'> همراه شما در درمان </p>
                </div>
            </div>
    );
}

export default Logo;