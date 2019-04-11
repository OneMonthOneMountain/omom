import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap'
import Routes from './Routes'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar collapseOnSelect variant={"dark"} expand={"md"} bg={"dark"}>
          <LinkContainer to="/">
            <Image roundedCircle className={"Icon"} src={"omom.png"}/>
          </LinkContainer>
          
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <LinkContainer to="/upcoming">
                <Nav.Link>Upcoming</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/completed">
                <Nav.Link>Completed</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/suggested">
                <Nav.Link>Suggested</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <Routes />
        </Container>
      </div>
    );
  }
}

export default App;
