import React from 'react';

import BlueCover from '../UI/BlueCover';
import SimpleMap from '../UI/Map';

import Support from '../Footer/Footer';
import Footer from '../Footer/Support/Support';

const ContactUs = () => {
    return (
        <div>
            <BlueCover text="تماس با ما"/>
            <div className="contactUs">
                <div className="message">
                    <form className="message-Form">
                        <label className="message-Form-Label" >نام و نام خانوادگی</label>
                        <input className="message-Form-Input" type="text" placeholder="ایمیل یا شماره همراه" required/>
                        <label className="message-Form-Label" >ایمیل یا شماره همراه</label>
                        <input className="message-Form-Input" type="email" placeholder="ایمیل یا شماره همراه" required/>
                        <label className="message-Form-Label" >پیام شما</label>
                        <textarea className="message-Form-Textarea" placeholder="ایمیل یا شماره همراه"></textarea>
                        <button className="message-Form-Button">
                            <p className='message-Form-Button-Text'>ارسال پیام</p>
                        </button>
                    </form>
                </div>
                <div> 
                    <div className="map-Texts">
                        <div>
                            <p className='map-Texts-Titles'>آدرس</p>
                            <div className='map-Texts-Address'>تهران طرشت خیابان شهید چوب تراش <br/> خیابان شهید حسین مردی بن بست پنجم پلاک 15 واحد 1</div>
                        </div>
                        <div className="map-Items">
                            <div className='map-Items-email'>
                                <div className='map-Texts-Titles'>ایمیل</div>
                                <div className="map-Texts-Email">info@nahiraTech.com</div>
                            </div>
                            <div className='map-Items-number'>
                                <div className='map-Texts-Titles'>شماره ثابت</div>
                                <p className="map-Texts-Phone">09912515020</p>
                            </div>
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