import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import { Provider } from 'react-redux';
import { FeathersConnector } from 'feathers-react-helpers';
import { Router, Route, browserHistory } from 'react-router';

import rootReducer from './reducers';
import initFeathers from './feathers';
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware
)(createStore);

const store = createStoreWithMiddleware(rootReducer);
const feathers = initFeathers();

render(
  <Provider store={store}>
    <FeathersConnector feathers={feathers}>
      <Router history={browserHistory} routes={routes}/>
    </FeathersConnector>
  </Provider>,
  document.getElementById('app')
);
