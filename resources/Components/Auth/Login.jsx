// Import React
import React, {Component} from 'react'

// Import Components
import MainNav from '.././Partials/Nav.jsx';
import Footer from '.././Partials/Footer.jsx';
import {Form, FormGroup, Col, ControlLabel, Checkbox, Button, FormControl} from 'react-bootstrap/lib';
import {Link} from 'react-router';


class Login extends Component {
  render()
  {
    return (
      <section className="homepage-content">
        <MainNav />
        <h1 className="placholder">Login</h1>
        <Form horizontal className="placholder">
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={8}>
              <FormControl type="email" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={8}>
              <FormControl type="password" placeholder="Password" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={1}>
              <Checkbox>Remember Me</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={1}>
              <Button type="submit">
                Sign In
              </Button>
            </Col>
          </FormGroup>
        </Form>

        <Footer />
      </section>
    )
  }
}

Login.propTypes = {
  //
}


export default Login
