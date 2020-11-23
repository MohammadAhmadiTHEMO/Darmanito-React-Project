import React, { useState } from 'react';

import 'tachyons';

import Logo from '../UI/Logo';
import navbarNavigationListItems from './NavbarNavigationListItems/NavbarNavigationListItems';


const Navbar = () => {
    const [sideDrawer, setSideDrawer] = useState({ Open: false });
    const drawgerToggle = () =>
    setSideDrawer((sideDrawer) => ({ Open: !sideDrawer.Open }));

    return (
        <header className='navbarContainer'>
            <Logo/>
            <div className={
                 sideDrawer.Open
                    ? "navbarContent navbarContentActive"   
                    : "navbarContent"}>
                    
                <ul className="navbarNavigation">
                    {navbarNavigationListItems.map((Item, index) => {
                        return (
                            <li className="navbarNavigationItems" key={index}>
                                <a
                                href={Item.href}
                                className={
                                    Item.active
                                    ? "navbarNavigationItems active"
                                    : "navbarNavigationItems "}
                                key={index}>
                                {Item.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                <div className="navbarButtonSeparator"></div>
                <button className="navbarButton b">دانلود درمانیتو</button>

            </div>
            <i
                className={
                !sideDrawer.Open
                    ? "navbarBurgerBars fa fa-bars"
                    : "navbarBurgerBarsDisable fa fa-bars"
                }
                onClick={drawgerToggle}
            ></i>
            <i
                className={
                    sideDrawer.Open
                    ? "navbarBurgerCross fa fa-times"
                    : "navbarBurgerCrossDisable fa fa-times"
                }
                onClick={drawgerToggle}
            ></i>
        </header>
    );
}

export default Navbar;