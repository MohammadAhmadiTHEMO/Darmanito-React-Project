import React from 'react';

import bazarLogo from '../../Assets/Images/UI/bazzarLogo.svg';
import bazarText from '../../Assets/Images/UI/bazzarText.svg';

const BazarLogoButton = (props) => {
    
    return(
        <a className="bazarButtonContainer" href={props.href} target="_blank" rel="noreferrer">
            <button className="bazarButton" style={{backgroundColor: props.backgroundColor}}>
                <p className="bazarButton__text p2">دریافت از</p>
                <img src={bazarText} alt="Bazar text" className="bazarButton__logoText"/>
                <img src={bazarLogo} alt="Bazar logo" className="bazarButton__logo"/>
            </button>
        </a>
    );
}

export default BazarLogoButton;