import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.scss';


import { NavigationBar, Footer } from './navigations/Components';

import Home from './home/main';
import About from './about/main';
import Gallery from './gallery/main';
import Blog from './blog/main';


const Switcher = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/gallery" component={Gallery} />
      <Route exact path="/blog" component={Blog} />
    </Switch>
  </>
);


export default () => (
  <ParallaxProvider>
    <Router>
      <NavigationBar />
      <Switcher />
      <Footer />
    </Router>
  </ParallaxProvider>
);
