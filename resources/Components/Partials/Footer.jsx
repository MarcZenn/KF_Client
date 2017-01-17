// import React
import React, {Component} from 'react';

// Components
import {Col, Row, Grid} from 'react-bootstrap/lib';
import {Link} from 'react-router';

// React Render
class Footer extends Component {
 render (){
   return (
     <footer className="main-footer">
      <Grid>
        <Row className="show-grid">
          <Col md={ 3 } xs={ 12 } >
            <div>
              <img src="/public/images/kickfurther-symbol-logo.png"  />
              <p><i className="fa fa-copyright" aria-hidden="true"></i> 2016 KICKFURTHER ALL RIGHTS RESERVED</p>
            </div>
          </Col>
          <Col md={ 3 } xs={ 12 } >
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/how-it-works">How it Works</Link></li>
              <li><Link to="/channel-partners">Channel Partners</Link></li>
              <li><Link to="/business-resources">Business Resources</Link></li>
              <li><Link to="/glossary">Glossary</Link></li>
              <li><Link to="/store-how-it-works">Store</Link></li>
              <li><Link to="/press">Press</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </Col>
          <Col md={ 3 } xs={ 12 } >
            <ul>
              <li>Contact</li>
              <li>E-mail</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Join Mailing List</li>
            </ul>
          </Col>
          <Col md={ 3 } xs={ 12 } >
            <ul>
              <li>Screening Process</li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li>Terms of Use</li>
              <li>Store Terms</li>
              <li>Expectations</li>
            </ul>
          </Col>
        </Row>
      </Grid>
     </footer>
   )
 }
}


Footer.propTypes = {
  // propTypes
}


export default Footer
