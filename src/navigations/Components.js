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
          <i className={['fab fa-twitter', style.icons, style.twt].join(' ')} />
          <i className={['fas fa-envelope', style.icons, style.evp].join(' ')} />
          <i className={['fab fa-youtube', style.icons, style.ytb].join(' ')} />
        </div>
      </div>
      <div className={style.copyright_container}>
        <span>
          <copyright>2020 Copyright:</copyright>
          Fogrex
        </span>
      </div>
    </div>
  </>

);
