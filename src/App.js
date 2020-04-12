import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { LinkContainer } from 'react-router-bootstrap';

import {
  Navbar, Nav, Row, Col,
} from 'react-bootstrap';

import Home from './home/main';
import About from './about/main';
import Gallery from './gallery/main';
import Blog from './blog/main';
import Contact from './contact/main';

const NavigationBar = () => (
  <div>
    <Navbar bg="dark" variant="dark">
      <LinkContainer to="/">
        <Navbar.Brand>Fogrex&apos;s Website</Navbar.Brand>
      </LinkContainer>
      <Nav className="justify-content-end">
        <Nav.Item>
          <Nav.Link href="about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="gallery">Gallery</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="blog">Blog</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="contact">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  </div>
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

const Footer = () => (
  <div style={{ height: '100px' }}>
    <Row className="bg-dark" style={{ color: '#fff' }}>
      <Col>
        <span style={{ fontSize: '30px' }}>Fogrex</span>
      </Col>
      <Col className="text-left">
        <a href="https://twitter.com/Faglexon">
          <i className="fab fa-twitter link-icon" />
        </a>
        <a href="mailto:fagrexon@gmail.com">
          <i className="far fa-envelope link-icon" />
        </a>
      </Col>
    </Row>
  </div>
);

export default () => (
  <Router>
    <NavigationBar />
    <Switcher />
    <Footer />
  </Router>
);