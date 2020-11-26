import React from 'react';

import registerPharmacy from '../../../../Assets/Images/RegisterPharmacy/registerPharmacy.svg';
import locationMark from '../../../../Assets/Images/RegisterPharmacy/locationMark.svg';

const MainCards = (props) => {
    return(
        <div className={props.padding === true ? "AboutUsHeaderCard" : "AboutUsHeaderCard-notactive"}>
            <img className={props.padding === true ? "AboutUsHeaderCard__img" : "AboutUsHeaderCard-notactive__img" } src={registerPharmacy} alt='Human'></img>
            <div className={props.padding === true ? "AboutUsHeaderCard__info" : "AboutUsHeaderCard-notactive__info"}>
                <h2 className={props.padding === true ? "AboutUsHeaderCard__name" : "AboutUsHeaderCard-notactive__name"}>{props.name}</h2>
                <div className={props.padding === true ? "AboutUsHeaderCard__address" : "AboutUsHeaderCard-notactive__address"}>
                <img className={props.padding === true ? "AboutUsHeaderCard__address__icon" : "AboutUsHeaderCard-notactive__address__icon"} src={locationMark} alt='Location Mark'></img>
                <p className={props.padding === true ? "AboutUsHeaderCard__address__text" : "AboutUsHeaderCard-notactive__address__text"}>{props.address}</p>
                </div>
            </div>
            {props.isBoarding
             ? <p className={props.padding === true ? "AboutUsHeaderCard__boarding" : "AboutUsHeaderCard-notactive__boarding"}>شبانه روزی</p>
             : null}
        </div>
    );
}

export default MainCards;