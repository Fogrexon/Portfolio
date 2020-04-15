import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import style from './Basics.module.scss';

export const NavigationBar = () => (
  <div>
    <Navbar>
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
      </Nav>
    </Navbar>
  </div>
);

export const Footer = () => (
  <>
    <div className={style.footer}>
      <div className={style.icon_container}>
        <div>
          <a href="https://twitter.com/Faglexon" target="_blank" rel="noopener noreferrer">
            <i className={['fab fa-twitter', style.icons, style.twt].join(' ')} />
          </a>
          <a href="mailto:fogrexon@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className={['fas fa-envelope', style.icons, style.evp].join(' ')} />
          </a>
          <a href="https://www.youtube.com/channel/UCNs8VOkhh8JPYwyH9yTsjzA" target="_blank" rel="noopener noreferrer">
            <i className={['fab fa-youtube', style.icons, style.ytb].join(' ')} />
          </a>
        </div>
      </div>
      <div className={style.copyright_container}>
        <span>
          <small>&copy; 2020 Fogrex</small>
        </span>
      </div>
    </div>
  </>

);
