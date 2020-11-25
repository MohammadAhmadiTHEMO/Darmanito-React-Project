import React from 'react';

import mainRegisterPic from '../../../Assets/Images/Main/register.svg';

const MainRegister = () => {
    return(
        <div className="mainRegisterContainer">
            <div className="mainRegister">
                <img src={mainRegisterPic} alt="person" className="mainRegister__img"/>
                <div className="mainRegister__info">
                    <h2 className="mainRegister__info__title">عضویت داروخانه یا مراکز درمانی</h2>
                    <p className="mainRegister__info__description">اگر به عنوان داروخانه یا مراکز درمانی قصد دارید در روند درمان و کسب و کار خودتان تغییر ایجاد کنید درمانیتو منتظر شماست.</p>
                    <div className="mainRegister__info__input">
                        <input type="text" className="mainRegister__info__input__input" placeholder="شماره همراه را وارد کنید 09912515020"/>
                        <button className="mainRegister__info__input__button">ثبت نام سریع</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default MainRegister;