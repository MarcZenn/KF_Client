// Import React
import React, {Component} from 'react'

// Import Components
import MainNav from '.././Partials/Nav.jsx';
import Footer from '.././Partials/Footer.jsx';
import {Col, Row, Grid} from 'react-bootstrap/lib';
import {Link} from 'react-router';


class Home extends Component {
  render()
  {
    return (
      <section>
        <MainNav />

        <h1 className="placholder">Home</h1>

        <Footer />
      </section>
    )
  }
}

Home.propTypes = {
  //
}


export default Home
