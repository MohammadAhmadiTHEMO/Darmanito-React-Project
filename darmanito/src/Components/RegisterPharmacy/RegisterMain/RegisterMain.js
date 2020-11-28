import React from 'react';

import shortid from 'short-id';
import RegisterMainCards from './RegisterMainCards/RegisterMainCards';

const registerMainCards = [
    {
        name: 'نام داروخانه شما',
        address: 'درمانیتو - سرویس داروخانه - داروخانه شما',
        image: null,
        active: true,
        borderSize : true,
        directionLeft : false ,
        id: shortid.generate()
    },
    {
        name: 'نام داروخانه شما',
        address: 'درمانیتو - سرویس داروخانه - داروخانه شما',
        image: null,
        active: false,
        borderSize : false,
        directionLeft : false ,
        id: shortid.generate()
    },
    {
        name: 'نام داروخانه شما',
        address: 'درمانیتو - سرویس داروخانه - داروخانه شما',
        image: null,
        active: true,
        borderSize : false,
        directionLeft : true ,
        id: shortid.generate()
    },
];

const RegisterMain = () => {
    return(
        <div className="register-Main">
            <div className="register-Main-Items">
                <h1 className="register-Main-Items-Title">شما هم در سلامت و بهبود مردم کشورمان موثر باشید.</h1>
                <p className="register-Main-Items-Description">با ثبت نام به عنوان داروخانه یا فروشگاه شما هم به سیستم درمان کمک کنید و به هزاران کاربر خدمات ارائه بدید همچنین روزانه درآمد حساب خودتان را تصویه کنید.</p>
                <div className="register-Main-Items-Inputs">
                    <input className="register-Main-Items-Inputs-Input" type="text" placeholder="شماره همراه را وارد کنید: 09912515020 "/>
                    <button className="register-Main-Items-Inputs-Button">ثبت نام سریع</button>
                </div>
            </div>
            <div>
                {registerMainCards.map((registerMainCards) => 
                                        <RegisterMainCards
                                            name={registerMainCards.name}
                                            address={registerMainCards.address}
                                            image={registerMainCards.image}
                                            active={registerMainCards.active}
                                            borderSize={registerMainCards.borderSize}
                                            directionLeft={registerMainCards.directionLeft}
                                            key={registerMainCards.id}/>)}
            </div>
        </div>
        );
}
export default RegisterMain;