import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

export const BigTitle = ({ title, children }) => (
  <Jumbotron className="jumbotron-fullheight jumbo-vertical-center text-light text-center bg-dark mb-0 radius-0 ht-tm-jumbotron">
    <Container>
      <h1>{ title }</h1>
      { children }
    </Container>
  </Jumbotron>
);

export const Content = ({ children }) => (
  <Container style={{ margin: '30px auto' }}>
    { children }
  </Container>
);
