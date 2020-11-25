import React from 'react';

import {footerPages, footerServices} from './FooterNavigationItems/FooterNavigationItems';

import Logo from '../UI/Logo';
import BazarLogoButton from '../UI/BazzarLogoButton';
import SibAppLogoButton from '../UI/SibAppLogoButton';

const Footer = () => {
    return(
        <div className="footer section">
            
            <div className="footer__branding">
                <Logo />
                <h3 className="footer__branding__title">سوپر اپلیکیشن درمان و سلامت</h3>
                <p className="footer__branding__copyright">تمام حقوق مادی و معنوی این سایت متعلق به درماینیتو است.</p>
                <div className="footer__branding__socialNetwork">
                    <i className="footer__branding__socialNetwork__linkedin fab fa-linkedin-in"></i>
                    <i className="footer__branding__socialNetwork__twitter fab fa-twitter"></i>
                    <i className="footer__branding__socialNetwork__instagram footer__branding__socialNetwork__linkedin_active fab fa-instagram"></i>
                </div>
            </div>

            <div className="footer__pages">
                <p className="footer__pages__title"><strong>خدمات درمانیتو </strong></p>
                <ul className="footer__pages__items">
                {footerServices.map((item,index) => 
                        <li className={item.active===true ? "footer__pages__items__item footer__pages__items__item__active" :"footer__pages__items__item p2"} key={index}>{item.title}</li>)}
                </ul>
            </div>

            <div className="footer__services">
                <p className="footer__services__title"><strong> صفحات درمانیتو</strong></p>
                <ul className="footer__services__items">
                    {footerPages.map((item,index) => 
                        <li className="footer__services__items__item p2" key={index}>{item.title}</li>)}
                </ul>
            </div>


            <div className="footer__download">
                <p className="footer__download__title"><strong>دانلود درمانیتو</strong></p>
                <div className="footer__download__icons">
                    <BazarLogoButton backgroundColor="black" href="https://cafebazaar.ir/install"/>
                    <SibAppLogoButton backgroundColor="black" href="https://sibapp.com"/>
                </div>
            </div>
        </div>
    );
}
export default Footer;