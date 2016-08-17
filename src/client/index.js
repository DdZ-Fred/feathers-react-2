import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import io from 'socket.io-client';
import feathers from 'feathers/client';
import fSocketio from 'feathers-socketio/client';
import fHooks from 'feathers-hooks';
import fAuthentication from 'feathers-authentication/client';
// TODO: INTEGRATE with uWebSockets


import rootReducer from './reducers';
import { FeathersConnector } from 'feathers-react-helpers';
import routes from './routes';
import App from './components/App';

const SERVER_ADDRESS = process.env.SERVER_ADDRESS || 'http://localhost';
const PORT = process.env.PORT || 3030;

const socket = io(`${SERVER_ADDRESS}:${PORT}`);
const app = feathers()
  .configure(fSocketio(socket))
  .configure(fHooks())
  .configure(fAuthentication({
    storage: window.localStorage,
  }));

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware
)(createStore);

const store = createStoreWithMiddleware(rootReducer);

render(
  <Provider store={store}>
    <FeathersConnector feathers={app}>
      <Router history={browserHistory} routes={routes}/>
    </FeathersConnector>
  </Provider>,
  document.getElementById('app')
);
