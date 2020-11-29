import React from 'react';

import success from '../../Assets/Images/UI/success.svg';
import BackDrop from './BackDrop';

const Modal = (props) => {
    return (
        
        <div className={props.show 
            ? 'Modal Avtive' 
            : 'Modal Not-Active'
            }>
            {/* <BackDrop/> */}
            <div className='Modal-Image'>
                <img src={success} alt='Succes Icon'></img>
            </div>
            <div className='Modal-Items'>
                <p className='Modal-Items-Title'> ثبت نام با موفقیت انجام شد </p>
                <p className='Modal-Items-Text'> برای اعلام توضیحات با شما تماس خواهیم گرفت </p>
                <button className='Modal-Items-Button' >
                    <a className='Modal-Items-Button-Text' href='/'>بازگشت</a>
                </button>
            </div>
        </div>
    );
}

export default Modal;