// Import React
import React, {Component} from 'react'

// Import Components
import Nav from '.././Partials/Nav.jsx';
import Footer from '.././Partials/Footer.jsx';
import {Col, Row, Grid} from 'react-bootstrap/lib';
import {Link} from 'react-router';


class Home extends Component {
  render()
  {
    return (
      <section className="homepage-content">
        <Nav />

        <h1>home</h1>

        <Footer />
      </section>
    )
  }
}

Home.propTypes = {
  //
}


export default Home
