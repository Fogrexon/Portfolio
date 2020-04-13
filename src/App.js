import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.scss';

import Container from 'react-bootstrap/Container';

import { NavigationBar, Footer } from './navigations/Components'; 

import Home from './home/main';
import About from './about/main';
import Gallery from './gallery/main';
import Blog from './blog/main';
import Contact from './contact/main';



const Switcher = () => (
  <Container>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/gallery" component={Gallery} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </Container>
);



export default () => (
  <Router>
    <NavigationBar />
    <Switcher />
    <Footer />
  </Router>
);