import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import style from './Basics.module.scss';

export const NavigationBar = () => (
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

export const Footer = () => (
  <React.Fragment>
    <div className={style.footer}>
      <i className={ "fab fa-twitter " + style.icons }></i>
      <i className={ "fas fa-envelope " + style.icons }></i>
      <i className={ "fab fa-youtube " + style.icons }></i>
    </div>
  </React.Fragment>

);