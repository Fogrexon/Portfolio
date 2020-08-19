import React from 'react';
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
import Admin from './admin/Admin';
import SignIn from './admin/SignIn';
import GalleryAdmin from './admin/GalleryAdmin';

import Auth from './utils/Auth';


const Switcher = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/gallery" component={Gallery} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/admin/signin" component={SignIn} />
      <Auth>
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/admin/work" component={GalleryAdmin} />
      </Auth>
    </Switch>
  </>
);


export default () => (
  <Router>
    <NavigationBar />
    <div className="contents-outer">
      <Switcher />
    </div>
    <Footer />
  </Router>
);
