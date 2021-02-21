import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import User from './components/pages/User';
import Default from './components/pages/Default';

const Routes = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about-us">
            <h1>À propos</h1>
          </Route>
          <Route path="/account/signup" component={Signup} />
          <Route exact path="/account/login" component={Login} />
          <Route path="/account/login/user/info" component={User} />
          <Route path="*" component={Default} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default Routes;
