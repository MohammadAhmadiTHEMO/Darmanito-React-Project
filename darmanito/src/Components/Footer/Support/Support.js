import React from 'react';

import supportLogo from '../../../Assets/Images/Footer/support.svg';

const Support = () => {
    return(
        <div className="section support">
            <div className="support__text">
                <p className="support__text__title">پشتیبانی درمانیتو</p>
                <p className="support__text__body">پاسخگویی در روزهای کاری از ساعت 9 صبح تا 9 شب</p>
            </div>
            <button className="support__button">
                <img src={supportLogo} alt="support icon" className="support__button__img"/>
                <p className="support__button__text"><a className="support__button__text__a" href="tel:009844219671">پشتیبانی:   02144219671</a></p>
            </button>
        </div>
    );
}

export default Support