import React from 'react';

import registerMarket from '../../../Assets/Images/RegisterPharmacy/registerMarket.svg';
import drugStore from '../../../Assets/Images/RegisterPharmacy/registerDrugStore.svg';

const MainServices = () => {
    return(
        <div className="aboutUsServices section">
            <h2 className="aboutUsServices__title">در درمانیتو چه خدمات ارائه خواهید داد؟</h2>
            <p className="aboutUsServices__description">خدمت مورد نظر خود را برای ثبت نام انتخاب کنید.</p>
            <div className="aboutUsServices__cards">
                <div className="aboutUsServices__cards__card">
                    <img className="aboutUsServices__cards__card__img" src={registerMarket} alt="market"/>
                    <h3 className="aboutUsServices__cards__card__title">فروشگاه آرایشی و بهداشتی</h3>
                    <p className="aboutUsServices__cards__card__description">مایل هستم فقط به عنوان داروخانه فعالیت کنم و در بخش صرفا سفارش دارو با عکس نسخه به بیماران کمک رسانی کنم.</p>
                    <button className="aboutUsServices__cards__card__button">ثبت نام</button>
                </div>

                <div className="aboutUsServices__cards__card">
                    <img className="aboutUsServices__cards__card__img" src={drugStore} alt="pharmacy"/>
                    <h3 className="aboutUsServices__cards__card__title">داروخانه</h3>
                    <p className="aboutUsServices__cards__card__description">مایل هستم فقط به عنوان داروخانه فعالیت کنم و در بخش صرفا سفارش دارو با عکس نسخه به بیماران کمک رسانی کنم.</p>
                    <button className="aboutUsServices__cards__card__button">ثبت نام</button>


                </div>
            </div>
        </div>
        );
}
export default MainServices;