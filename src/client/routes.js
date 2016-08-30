import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppF from './containers/AppF';
import App from './components/App';

import Home from './components/Home';
import Team from './components/Team';
import Signup from './components/Signup';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path='/team' component={Team} />
    <Route path="/signup" component={Signup} />
  </Route>
);
