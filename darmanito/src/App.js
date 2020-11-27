import React, { Component , Fragment } from 'react';

import "tachyons" ;

import {Route, Switch} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';  

import Navbar from './Components/Header/Navbar';
import Main from './Components/Main/Main';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import RegisterPharmacy from './Components/RegisterPharmacy/RegisterPharmacy';
import FAQ from './Components/FAQ/FAQ';
import TermAndConditions from './Components/TermAndConditions/TermAndConditions';
import RegisterPharmacyForm from './Components/RegisterPharmacyForm/RegisterPharmacyForm';




class App extends Component {
  render() {
    return (
      <Fragment>
          <Navbar />
          <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/AboutUs" component={AboutUs}/>
          <Route exact path="/ContactUs" component={ContactUs}/>
          <Route exact path="/RegisterPharmacy" component={RegisterPharmacy}/>
          <Route exact path="/faq" component={FAQ}/>
          <Route exact path="/TermAndConditions" component={TermAndConditions}/>
          <Route exact path="/OnlinePharmacy" component={RegisterPharmacyForm}/>
          </Switch>
      </Fragment>
    );
  }
}

export default App;
