// import React
import React, {Component} from 'react';


// Components
import {NavItem, Nav, Navbar, NavbarToggle, NavbarHeader, MenuItem, NavDropdown, NavbarBrand, NavbarCollapse} from 'react-bootstrap/lib';
import {LinkContainer} from 'react-router-bootstrap';


class MainNav extends Component {
  render(){
    return(
      <Navbar className="main-nav" inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
              <a href="/"><img src="/public/images/kickfurther-symbol-logo.png"  /></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={{ pathname: '/browse' }}>
              <NavItem eventKey={1} href="#">Browse</NavItem>
            </LinkContainer>
            <NavItem eventKey={2} href="#">Create A Business Account</NavItem>
          </Nav>
          <Nav pullRight>
            <LinkContainer to={{ pathname: '/login' }}>
              <NavItem eventKey={1}>Login</NavItem>
            </LinkContainer>
            <LinkContainer to={{ pathname: '/register' }}>
              <NavItem eventKey={2}>Signup</NavItem>
            </LinkContainer>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Dashboard</MenuItem>
              <MenuItem eventKey={3.2}>Consignments</MenuItem>
              <MenuItem eventKey={3.3}>Store</MenuItem>
              <MenuItem eventKey={3.3}>Account</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Logout</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

MainNav.propTypes = {
 // propTypes
}


export default MainNav
