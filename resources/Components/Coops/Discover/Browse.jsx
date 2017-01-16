// Import React
import React, {Component} from 'react'

// Import Components
import MainNav from '../.././Partials/Nav.jsx';
import Footer from '../.././Partials/Footer.jsx';
import {Col, Row, Grid} from 'react-bootstrap/lib';
import {Link} from 'react-router';


class Browse extends Component {
  render()
  {
    return (
      <section>
        <MainNav />

        <h1 className="placholder">Browse Dem Coops</h1>

        <Footer />
      </section>
    )
  }
}

Browse.propTypes = {
  //
}


export default Browse
