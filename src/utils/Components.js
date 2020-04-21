import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

export const BigTitle = ({ title, children }) => (
  <Jumbotron className="jumbotron-fullheight jumbo-vertical-center text-center">
    <Container>
      <h1>{ title }</h1>
      <div className="lead">
        { children }
      </div>
    </Container>
  </Jumbotron>
);

export const Content = ({ children }) => (
  <Container style={{ margin: '30px auto' }}>
    { children }
  </Container>
);
