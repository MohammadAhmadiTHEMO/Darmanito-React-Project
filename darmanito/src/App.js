import React, { Component , Fragment } from 'react';

import "tachyons" ;
// import {Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Components/Navbar/Navbar';
// import Main from './pages/Main';
// import AboutUs from './pages/AboutUs';
// import ContactUs from './pages/ContactUs';
// import FAQ from './pages/FAQ';
// import RegisterPharmacy from './pages/RegisterPharmacy';
// import TermAndConditions from './pages/TermAndConditions';
// import Navbar from './components/Navbar';




class App extends Component {
  render() {
    return (
      <Fragment>
          <Navbar />
       {/*<Switch>
      <Route exact path="/" component={Main}/>
      <Route exact path="/about-us" component={AboutUs}/>
      <Route exact path="/contact-us" component={ContactUs}/>
      <Route exact path="/faq" component={FAQ}/>
      <Route exact path="/RegisterPharmacy" component={RegisterPharmacy}/>
      <Route exact path="/TermAndConditions" component={TermAndConditions}/>
    </Switch> */}
      </Fragment>
    );
  }
}

export default App;
