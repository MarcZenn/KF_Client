// import React
import React, {Component} from 'react';


// Components
import {Col, Row, Grid} from 'react-bootstrap/lib';
import MainNav from '.././Partials/Nav.jsx';
import Footer from '.././Partials/Footer.jsx';


class PrivacyPolicy extends Component {
  render() {
    return(
      <section>
        <MainNav />
          <h1 className="placholder">Privacy Policy</h1>
        <Footer />
      </section>
    )
  }
}


PrivacyPolicy.propTypes = {
  // propTypes
}


export default PrivacyPolicy
