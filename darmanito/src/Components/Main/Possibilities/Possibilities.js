import React, {useState} from 'react';

import shortid from 'short-id';

import PossibilitiesImages from './PossibilitiesImages/PossibilitiesImages';

import pharmacy from '../../../Assets/Images/Main/pharmacy.svg';
import market from '../../../Assets/Images/Main/market.svg';
import onlineVisit from '../../../Assets/Images/Main/onlineVisit.svg';
import onlineSchedule from '../../../Assets/Images/Main/onlineSchedule.svg';
import down from '../../../Assets/Images/Main/down.svg';
import check from '../../../Assets/Images/Main/check.svg';



const Possibilities = () => {
    const [possibilities, setPossibilities] = useState([
        {
            title: 'داروخانه',
            image: pharmacy,
            description: 'در سرویس داروخانه شما می توانید نسخه دارویی یا محصول بهداشتی خودتون رو برای پیدا شدن به داروخانه و فروشگاه ها سفارش بدید.',
            step1: 'وارد بخش سفارش با عکس نسخه شوید و عکس و توضیحات را وارد کنید',
            step2: 'بعد از ارسال عکس نسخه، باید آدرس محل خودتون رو وارد کنید',
            step3: 'اگر نتیجه جستجوی نسخه موفقیت آمیز باشه باید منتظر تحویل سفارش باشید',
            active: true,
            id: shortid.generate(),
        },
        {
            title: 'فروشگاه',
            image: market,
            description: 'در سرویس فروشگاه شما می توانید تمامی محصولات بهداشتی خودتون رو برای پیدا شدن به فروشگاه ها سفارش بدید',
            step1: 'وارد بخش سفارش با عکس نسخه شوید و عکس و توضیحات را وارد کنید',
            step2: 'بعد از ارسال عکس نسخه، باید آدرس محل خودتون رو وارد کنید',
            step3: 'اگر نتیجه جستجوی نسخه موفقیت آمیز باشه باید منتظر تحویل سفارش باشید',
            active: false,
            id: shortid.generate(),
        },
        {
            title: 'ویزیت آنلاین',
            image: onlineVisit,
            description: 'به زودی',
            step1: 'وارد بخش سفارش با عکس نسخه شوید و عکس و توضیحات را وارد کنید',
            step2: 'بعد از ارسال عکس نسخه، باید آدرس محل خودتون رو وارد کنید',
            step3: 'اگر نتیجه جستجوی نسخه موفقیت آمیز باشه باید منتظر تحویل سفارش باشید',
            active: false,
            id: shortid.generate(),
        },
        {
            title: 'نوبت دهی آنلاین',
            image: onlineSchedule,
            description: 'به زودی',
            step1: 'وارد بخش سفارش با عکس نسخه شوید و عکس و توضیحات را وارد کنید',
            step2: 'بعد از ارسال عکس نسخه، باید آدرس محل خودتون رو وارد کنید',
            step3: 'اگر نتیجه جستجوی نسخه موفقیت آمیز باشه باید منتظر تحویل سفارش باشید',
            active: false,
            id: shortid.generate(),
        },
    ]);
    const switchPossibilities = (id) => (
        setPossibilities(
            possibilities.map((item) => {
            item.id === id
            ? item.active = true
            : item.active = false
            return(item);
        })
        )
    )
    return(
        <div className="possibilities">
            <h2 className="possibilitiesTitle">امکانات درمانیتو</h2>
            <div className="possibilitiesIcons">
                {possibilities.map((item) => (
                    <PossibilitiesImages
                    title={item.title}
                    image={item.image}
                    active={item.active}
                    click={()=>switchPossibilities(item.id)}
                    key={item.id}/>
                ))}
            </div>
            <div className="possibilitiesInfo">
                {possibilities.filter((item)=> item.active === true).map((item) => {
                    return(
                        <div key={item.description}>
                            <p className='f4'> {item.title} </p>
                            <p className="possibilitiesInfo-Description">
                                {item.description}
                            </p>
                            <div className="possibilitiesInfo-Step1">
                                <div>
                                    <img className="possibilitiesInfo-Step1-Image" src={down} alt="down"/>
                                    <p><strong>قدم اول</strong></p>
                                </div>
                                <p className="possibilitiesInfo-Step1-Description">{item.step1}</p>
                            </div>
                            <div className="possibilitiesInfo-Step2">
                                <div>
                                    <img className="possibilitiesInfo-Step2-Image" src={down} alt="down"/>
                                    <p><strong>قدم دوم</strong></p>
                                </div>
                                <p className="possibilitiesInfo-Step2-Description">{item.step2}</p>
                            </div>
                            <div className="possibilitiesInfo-Step3">
                                <div>
                                    <img className="possibilitiesInfo-Step3-Image" src={check} alt="check"/>
                                    <p><strong>قدم سوم</strong></p>
                                </div>
                                <p className="possibilitiesInfo-Step3-Description">{item.step3}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Possibilities;