import React from 'react';
import applicationDoctorImage from '../../../../Assets/Images/Main/applicationDoctorImage.svg';

const ApplicationDoctorImage = () => {
    return (
        <div className="applicationImage">
            <img src={applicationDoctorImage} alt='Doctor'></img>
        </div>
    );
}

export default ApplicationDoctorImage;