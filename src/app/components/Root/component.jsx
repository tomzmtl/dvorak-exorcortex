import React from 'react';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../../redux/reducers';

import App from '../App/container';

import '../../../scss/app.scss';


const logger = createLogger({
  collapsed: true,
  diff: true,
});

const store = createStore(reducers, window.__PRELOADED_STATE__, applyMiddleware(thunk, logger));

store.dispatch({ type: 'APP_INIT' });

const Root = () => (
  <Provider store={store}>
    <div className="Root">
      <App />
    </div>
  </Provider>
);

export default Root;
