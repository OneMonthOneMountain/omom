import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Routes from './Routes'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar collapseOnSelect>
          <Navbar.Brand>
            <Link to="/">OMOM</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/walks">
                <Nav.Link>Walks</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default App;
