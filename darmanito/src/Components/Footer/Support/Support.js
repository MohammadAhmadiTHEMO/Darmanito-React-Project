import React from 'react';

import support from '../../../Assets/Images/Footer/support.svg';

const Support = () => {
    return(
        <div className='support'>
            <div className='support-Text'>
                <p className='support-Text-Title'> پشتیبانی درمانیتو </p>
                <p className='support-Text-Texts'> پاسخگویی در روزهای کاری از ساعت 9 صبح تا 9 شب </p>
            </div>
            <button className='support-Button'>
                <img className='support-Button-Image' src={support} alt='Support Icon' />
                <p className='support-Button-Text'>
                    <a className='support-Button-Text-Texts' href='#Support'> پشتیبانی : 02144219671 </a>
                </p>
            </button>
        </div>
    );
}

export default Support;