import React from 'react';

import shortid from 'short-id';
import MainCards from './MainCards/BodyCards';

const mainCards = [
    {
        name: 'نام داروخانه شما',
        address: 'درمانیتو - سرویس داروخانه - داروخانه شما',
        image: null,
        isBoarding: true,
        padding : true,
        id: shortid.generate()
    },
    {
        name: 'نام داروخانه شما',
        address: 'درمانیتو - سرویس داروخانه - داروخانه شما',
        image: null,
        isBoarding: false,
        padding : false,
        id: shortid.generate()
    },
    {
        name: 'نام داروخانه شما',
        address: 'درمانیتو - سرویس داروخانه - داروخانه شما',
        image: null,
        padding : false,
        isBoarding: true,
        id: shortid.generate()
    },
];

const AboutUsHeader = () => {
    return(
        <div className="aboutUs__header section">
            <div className="aboutUs__header__textAndInput">
                <h1 className="aboutUs__header__textAndInput__title">شما هم در سلامت و بهبود مردم کشورمان موثر باشید.</h1>
                <p className="aboutUs__header__textAndInput__description">با ثبت نام به عنوان داروخانه یا فروشگاه شما هم به سیستم درمان کمک کنید و به هزاران کاربر خدمات ارائه بدید همچنین روزانه درآمد حساب خودتان را تصویه کنید.</p>
                <div className="aboutUs__header__textAndInput__input">
                    <input className="aboutUs__header__textAndInput__input__input" type="text" placeholder="شماره همراه را وارد کنید: 09912515020 "/>
                    <button className="aboutUs__header__textAndInput__input__button">ثبت نام سریع</button>
                </div>
            </div>
            <div className="aboutUs__header__icons">
                <div className="aboutUs__header__icons__icon">
                    {mainCards.map((item) => <MainCards
                                                name={item.name}
                                                address={item.address}
                                                image={item.image}
                                                padding={item.padding}
                                                isBoarding={item.isBoarding}
                                                key={item.id}/>)}


                    
                </div>
            </div>
        </div>
        );
}
export default AboutUsHeader;