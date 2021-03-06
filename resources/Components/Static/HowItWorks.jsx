// import React with sugar on top
import React, {Component} from 'react';


// Components
import {Col, Row, Grid} from 'react-bootstrap/lib';
import MainNav from '.././Partials/Nav.jsx';
import Footer from '.././Partials/Footer.jsx';


class HowItWorks extends Component {
  render() {
    return(
      <section>
        <MainNav />

        <h1 className="placholder">How It Works</h1>

        <Footer />
      </section>
    )
  }
}


HowItWorks.propTypes = {
  // childVisible: React.PropTypes.bool.isRequired
}


export default HowItWorks
