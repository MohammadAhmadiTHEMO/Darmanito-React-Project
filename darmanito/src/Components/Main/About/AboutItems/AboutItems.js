import React from 'react';

import 'tachyons';

import aboutFastSearch from '../../../../Assets/Images/Main/aboutFastSearch.svg';
import aboutEfficient from '../../../../Assets/Images/Main/aboutEfficient.svg';
import aboutComfortable from '../../../../Assets/Images/Main/aboutComfortable.svg';
import aboutSearch from '../../../../Assets/Images/Main/aboutSearch.svg';


const AboutItems = () => {
    return (
        <div className='aboutItems'>
            <div className='aboutTextsItems'>
                <h3> درباره درمانیتو </h3><br/>
                <p> درمانیتو یک سامانه است که امکان سفارش دارو،محصولات آرایشی بهداشتی نوبت گیری و مشاور پزشکان را به راحتی و به صورت آنلاین فراهم کرده است </p>
            </div>
            <div className='aboutImagesItems'>
                <div className=''>
                    <div className='aboutImageStyle'>
                        <img src={aboutFastSearch} alt=""></img>
                    </div>
                    <div className='tc ic f6'><p> جستجو سریع </p></div>
                </div>
                <div className=''>
                    <div className='aboutImageStyle'> 
                        <img src={aboutEfficient} alt=""></img>
                    </div>
                    <div className='tc ic f6'><p> به صرفه </p></div>
                </div>
                <div className=''>
                    <div className='aboutImageStyle'> 
                        <img src={aboutComfortable} alt=""></img>
                    </div>
                    <div className='tc ic f6'><p> راحت </p></div>
                </div>
                <div className=''>
                    <div className='aboutImageStyle'> 
                        <img src={aboutSearch} alt=""></img>
                    </div>
                    <div className='tc ic f6'><p> جستجو سریع </p></div>
                </div>
            </div>
        </div>
    );
}

export default AboutItems;
