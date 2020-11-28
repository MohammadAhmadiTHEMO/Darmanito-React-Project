import React from 'react';

import appDownload from '../../../Assets/Images/Main/appDownload.svg';

import SibAppLogoButton from '../../UI/SibAppLogoButton';
import BazarLogoButton from '../../UI/BazzarLogoButton';
import AndroidLogoButton from '../../UI/AndroidLogoButton';

const AppDownload = () => {
    const Style = {
        backgroundColor: "#2361b5"
    };
    return(
        <div className="appDownload-Container">
            <div className="appDownload">
                <div className="appDownload-Info">
                    <h2 className="appDownload-Info-Title">دانلود اپلیکیشن درمانیتو</h2>
                    <p className="appDownload-Info-Description">برای دریافت لینک دانلود، شماره موبایل خود را وارد کنید.</p>
                    <div className="appDownload-Info-Input">
                        <button className="appDownload-Info-Input-Button">بفرست</button>
                        <input className="appDownload-Info-Input-Input" 
                               type="text" 
                               placeholder="شماره همراه را وارد کنید 09912515020" />
                    </div>
                    <div className="appDownload-Icons">
                        <AndroidLogoButton
                        backgroundColor={Style.backgroundColor}/>
                        <BazarLogoButton
                        backgroundColor={Style.backgroundColor}/>
                        <SibAppLogoButton
                        backgroundColor={Style.backgroundColor}/>
                    </div>
                </div>
                <img className="appDownload-Image" src={appDownload} alt="Mobile Application"/>
            </div>
        </div>
    );
}

export default AppDownload;