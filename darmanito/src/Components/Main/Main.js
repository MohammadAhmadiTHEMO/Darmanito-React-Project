import React, { Fragment } from 'react';

import "tachyons" ;

import Application from './Application/Application';
import About from './About/About';

const Main = () => {
    return (
        <Fragment>
            <Application/>
            <About/>
        </Fragment>
    );
}

export default Main;