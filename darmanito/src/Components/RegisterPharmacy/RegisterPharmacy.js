import React, { Fragment } from 'react';

import Main from './Main/Body';
import MainStatics from './MainStatics/BodyStatics';
import MainServices from './MainServices/BodyServices';
import Support from '../Footer/Support/Support';
import Footer from '../Footer/Footer';


const RegisterPharmacy = () => {
    return (
        <Fragment>
            <Main/>
            <MainStatics/>
            <MainServices/>
            <Support/>
            <Footer/>
        </Fragment>
    );
}

export default RegisterPharmacy;