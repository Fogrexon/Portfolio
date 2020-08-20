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
import BlogList from './blog/BlogList';
import Blog from './blog/Blog';
import Admin from './admin/Admin';
import SignIn from './admin/SignIn';
import GalleryAdmin from './admin/GalleryAdmin';
import BlogAdmin from './admin/BlogAdmin';

import Auth from './utils/Auth';


const Switcher = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/gallery" component={Gallery} />
      <Route exact path="/blog" component={BlogList} />
      <Route exact path="/blog/:id" component={Blog} />
      <Route exact path="/admin/signin" component={SignIn} />
      <Auth>
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/admin/work" component={GalleryAdmin} />
        <Route exact path="/admin/blog" component={BlogAdmin} />
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
