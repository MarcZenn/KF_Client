// import React
import React, {Component} from 'react';

// Components
import {Col, Row, Grid} from 'react-bootstrap/lib';
import {Link} from 'react-router';

// React Render
class Footer extends Component {
 render (){
   return (
     <footer className="footer">
      <Grid>
        <Row className="show-grid">
          <Col md={ 3 } xs={ 12 } >
            <div>
              <img src="/public/images/symbol-logo-white.png"  />
              <p><i className="fa fa-copyright" aria-hidden="true"></i> 2016 MARC ZENN ALL RIGHTS RESERVED</p>
            </div>
          </Col>
          <Col md={ 9 } xs={ 12 } >
              <div className="home-footer-list">
              <Row>
                <ul>
                  <Col xs={ 2 }>
                    <li><Link to="/companies">Companies</Link></li>
                  </Col>
                  <Col  xs={ 2 }>
                    <li><Link to="/professional-contributions">Professional</Link></li>
                  </Col>
                  <Col  xs={ 2 }>
                    <li><Link to="/personal-projects">Personal</Link></li>
                  </Col>
                  <Col  xs={ 2 }>
                    <li><Link to="/about">About</Link></li>
                  </Col>
                  <Col  xs={ 2 }>
                    <li><Link to="/contact">Contact</Link></li>
                  </Col>
                  <Col  xs={ 2 }>
                    <li><Link to="/privacy-policy">Privacy</Link></li>
                  </Col>
                  <Col  xs={ 2 }>
                    <li><Link to="https://github.com/MarcZenn">Github</Link></li>
                  </Col>
                  <Col  xs={ 2 }>
                    <li><Link to="https://www.linkedin.com/in/marcosmartinez2">LinkedIn</Link></li>
                  </Col>
                  <Col  xs={ 2 }>
                    <li><Link to="/terms-of-use">Terms of Use</Link></li>
                  </Col>
                </ul>
              </Row>
              </div>
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
