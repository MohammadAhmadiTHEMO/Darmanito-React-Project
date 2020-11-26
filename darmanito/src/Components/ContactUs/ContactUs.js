import React from 'react';

import BlueCover from '../UI/BlueCover';
import SimpleMap from '../UI/Map';

import Support from '../Footer/Footer';
import Footer from '../Footer/Support/Support';

const ContactUs = () => {
    return (
        <div className="">
            <BlueCover text="تماس با ما"/>
            <div className="contactUsFormAndMap section">
                <div className="messageForm">
                    <form className="messageForm__form">
                        <label className="messageForm__form__label" htmlFor="fullname">نام و نام خانوادگی</label>
                        <input className="messageForm__form__input" id="fullname" name="fullname" type="text" placeholder="ایمیل یا شماره همراه"/>
                        <label className="messageForm__form__label" htmlFor="emailAndPhone">ایمیل یا شماره همراه</label>
                        <input className="messageForm__form__input" id="emailAndPhone" type="text" placeholder="ایمیل یا شماره همراه"/>

                        <label className="messageForm__form__label" htmlFor="message">پیام شما</label>
                        <textarea className="messageForm__form__textarea" name="name is here" id="message" cols="30" rows="9" placeholder="ایمیل یا شماره همراه"></textarea>

                        <button className="messageForm__form__button"><p className='messageForm__form__button__text'>ارسال پیام</p></button>
                    </form>
                </div>
                <div className="contactUS__map"> 
                <div className="map-Texts">
                    <div>
                        <p className='map-Texts-Titles'>آدرس</p>
                        <div className='map-Texts-Address'>تهران طرشت خیابان شهید چوب تراش <br/> خیابان شهید حسین مردی بن بست پنجم پلاک 15 واحد 1</div>
                    </div>
                    <div className="">
                        <div className='map-Texts-Titles'>ایمیل</div>
                        <div className="map-Texts-Email">info@nahiraTech.com</div>
                        <div className='map-Texts-Titles'>شماره ثابت</div>
                        <p className="map-Texts-Phone">09912515020</p>
                    </div>
                </div>
                <SimpleMap/>
                </div>
            </div>
            <Footer/>
            <Support/>      
        </div>
    );
}

export default ContactUs