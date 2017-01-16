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
              <li><a href="/about">About</a></li>
              <li><a href="/how-it-works">How it Works</a></li>
              <li><a href="/channel-partners">Channel Partners</a></li>
              <li><a href="/business-resources">Business Resources</a></li>
              <li><a href="/glossary">Glossary</a></li>
              <li><a href="/store-how-it-works">Store</a></li>
              <li><a href="/press">Press</a></li>
              <li><a href="/blog">Blog</a></li>
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
              <li><a href="/privacy-policy">Privacy Policy</a></li>
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
