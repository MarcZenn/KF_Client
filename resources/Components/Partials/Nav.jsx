// import React
import React, {Component} from 'react';


// Components
import {Col, Row, Grid} from 'react-bootstrap/lib';
import {Link} from 'react-router';


class Nav extends Component {
  render(){
    return(
      <nav className="site clear main-nav">
        <ul>
          <Grid>
            <Row className="show-grid">
              <Col md={6}>
                <Link to="/">
                  <li>
                    <img src="/public/images/symbol-logo-white.png"  />
                  </li>
                </Link>
              </Col>
              <Col md={6}>
                <Col md={3} xs={12}>
                  <li><Link to="/companies">Companies</Link></li>
                </Col>
                <Col md={3} xs={12}>
                  <li><Link to="/works">Work</Link></li>
                </Col>
                <Col md={3} xs={12}>
                  <li><Link to="/about">About</Link></li>
                </Col>
                <Col md={3} xs={12}>
                  <li><Link to="/contact">Contact</Link></li>
                </Col>
              </Col>
            </Row>
          </Grid>
        </ul>
      </nav>
    )
  }
}

Nav.propTypes = {
 // propTypes
}


export default Nav
