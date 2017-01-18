// import React with sugar on top
import React, {Component} from 'react';


// Components
import {Col, Row, Grid} from 'react-bootstrap/lib';
import MainNav from '.././Partials/Nav.jsx';
import Footer from '.././Partials/Footer.jsx';


class BusinessResources extends Component {
  render() {
    return(
      <section>
        <MainNav />

        <h1 className="placholder">Business Resources</h1>

        <Footer />
      </section>
    )
  }
}


BusinessResources.propTypes = {
  // childVisible: React.PropTypes.bool.isRequired
}


export default BusinessResources
