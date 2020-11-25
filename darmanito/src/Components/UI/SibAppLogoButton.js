import React from 'react';

import sibAppLogo from '../../Assets/Images/UI/sibAppLogo.svg';
import sibAppText from '../../Assets/Images/UI/sibAppText.svg';

const SibAppLogoButton = (props) => {
    return(
        <a href={props.href} className="sibAppButtonContainer" target="_blank" rel="noreferrer">
            <button className="sibAppButton" style={{backgroundColor: props.backgroundColor}}>
                    <img className="sibAppButton__text__img" src={sibAppLogo} alt="sibAppLogo"/>
                <div className="sibAppButton_a">
                    <p className="sibAppButton__text">دریافت نسخه ios از</p>
                    <img className="sibAppButton__logoText" src={sibAppText} alt="sibAppLogoText"/>
                </div>
            </button>
        </a>
    );
}

export default SibAppLogoButton;
