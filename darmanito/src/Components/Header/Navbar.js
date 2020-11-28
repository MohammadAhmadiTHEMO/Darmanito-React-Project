import React, { useState } from 'react';

import 'tachyons';

import Logo from '../UI/Logo';
import navigationItems from './NavbarNavigationListItems/NavbarNavigationListItems';


const Navbar = () => {
    const [sideDrawer, setSideDrawer] = useState({ Open: false });
    const drawgerToggle = () =>
    setSideDrawer((sideDrawer) => ({ Open: !sideDrawer.Open }));

    return (
        <header className='navbar'>
            <Logo/>
            <div className={
                 sideDrawer.Open
                    ? "navbar-Content navbar-Content-Active"   
                    : "navbar-Content"}>
                    
                <ul className="navbar-Navigation">
                    {navigationItems.map((navigationItems, index) => {
                        return (
                            <li className="navbar-Navigation-Items" key={index}>
                                <a  href={navigationItems.href}
                                    className={
                                        navigationItems.active
                                        ? "navbar-Navigation-Items active"
                                        : "navbar-Navigation-Items "}
                                    key={index}>
                                        {navigationItems.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                <div className="navbar-Button-Separator"></div>
                <button className="navbar-Button b">دانلود درمانیتو</button>

            </div>
            <i
                className={
                !sideDrawer.Open
                    ? "navbar-BurgerBars fa fa-bars"
                    : "navbar-BurgerBarsDisable fa fa-bars"
                }
                onClick={drawgerToggle}
            ></i>
            <i
                className={
                    sideDrawer.Open
                    ? "navbar-BurgerCross fa fa-times"
                    : "navbar-BurgerCrossDisable fa fa-times"
                }
                onClick={drawgerToggle}
            ></i>
        </header>
    );
}

export default Navbar;