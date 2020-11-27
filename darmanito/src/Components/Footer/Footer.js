import React from 'react';

import {footerPages, footerServices} from './FooterNavigationItems/FooterNavigationItems';

import Logo from '../UI/Logo';
import BazarLogoButton from '../UI/BazzarLogoButton';
import SibAppLogoButton from '../UI/SibAppLogoButton';

const Footer = () => {
    const Style = {
        backgroundColor: "#000000"
    };
    return(
        <div className="footer">
            <div className="footer-Main">
                <Logo />
                <h3 className="footer-Main-Title">سوپر اپلیکیشن درمان و سلامت</h3>
                <p className="footer-Main-Copyright">تمام حقوق مادی و معنوی این سایت متعلق به درماینیتو است.</p>
                <div className="footer-Main-SocialNetwork">
                    <i className="footer-Main-SocialNetwork-Linkedin fab fa-linkedin-in"></i>
                    <i className="footer-Main-SocialNetwork-Twitter fab fa-twitter"></i>
                    <i className="footer-Main-SocialNetwork-Instagram SocialNetwork-Active fab fa-instagram"></i>
                </div>
            </div>

            <div className="footer-Pages">
                <p className="footer-Pages-Title">خدمات درمانیتو </p>
                <ul className="footer-Pages-Items">
                {footerServices.map((item,index) => 
                        <li className='footer-Pages-Items-Item'  key={index}>
                                <a  className={item.active===true ?
                                             "footer-Pages-Items-Item-li item-Active" 
                                             :"footer-Pages-Items-Item-li"} 
                                    href={item.href}>
                                        {item.title}
                                </a>
                        </li>)}
                </ul>
            </div>

            <div className="footer-Services">
                <p className="footer-Services-Title"> صفحات درمانیتو</p>
                <ul className="footer-Services-Items">
                    {footerPages.map((item,index) => 
                        <li className='footer-Services-Items-Item' key={index}>
                                <a className="footer-Services-Items-Item-li" 
                                    href={item.href}>
                                    {item.title}
                                </a>
                        </li>)}
                </ul>
            </div>

            <div className="footer-Download">
                <p className="footer-Download-Title">دانلود درمانیتو</p>
                <div className="footer-Download-Icons">
                    <BazarLogoButton backgroundColor={Style.backgroundColor} href="https://cafebazaar.ir/install"/>
                    <SibAppLogoButton backgroundColor={Style.backgroundColor} href="https://sibapp.com"/>
                </div>
            </div>
        </div>
    );
}
export default Footer;