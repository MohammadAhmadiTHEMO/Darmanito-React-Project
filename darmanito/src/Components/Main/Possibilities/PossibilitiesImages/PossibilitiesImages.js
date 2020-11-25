import React from 'react';

const PossibilitiesImages = (props) => {
    return(
        <div onClick={props.click} className={props.active
                        ? "possibilitiesIcon possibilitiesIcon-Active"
                        : "possibilitiesIcon"}>
            <img className="possibilitiesIcon-Image" src={props.image} alt="Icon"/>
            <p className="possibilitiesIcon-Title">{props.title}</p>
        </div>
    );
}

export default PossibilitiesImages;