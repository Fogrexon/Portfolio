import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

export const BigTitle = (props) => (
  <Jumbotron>
    <h1>{ props.title }</h1>
    { props.children }
  </Jumbotron>
);