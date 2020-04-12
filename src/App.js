import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { LinkContainer } from 'react-router-bootstrap';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Home from './home/main';
import About from './about/main';
import Gallery from './gallery/main';
import Blog from './blog/main';
import Contact from './contact/main';

const NavigationBar = () => (
  <Navbar bg="dark" variant="dark">
    <LinkContainer to="/">
      <Navbar.Brand>Fogrexs Website</Navbar.Brand>
    </LinkContainer>
    <Nav className="justify-content-end">
      <Nav.Item>
        <LinkContainer to="about">
          <Nav.Link>About</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="gallery">
          <Nav.Link>Gallery</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="blog">
          <Nav.Link>Blog</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="contact">
          <Nav.Link>Contact</Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </Nav>
  </Navbar>
);

const Switcher = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/gallery" component={Gallery} />
    <Route exact path="/blog" component={Blog} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
);

export default () => (
  <Router>
    <NavigationBar />
    <Switcher />
  </Router>
);
