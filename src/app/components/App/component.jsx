import React from 'react';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../../redux/reducers';

import Tabs from '../Tabs/component';
import View from '../View/container';

import '../../../scss/app.scss';
import './styles.scss';


const logger = createLogger({
  collapsed: true,
  diff: true,
});

const store = createStore(reducers, window.__PRELOADED_STATE__, applyMiddleware(thunk, logger));

const Root = () => (
  <Provider store={store}>
    <div className="App">
      <div className="App__header">
        <div className="App__title">{'DV0R4K ExoCortex UI'}</div>
        <Tabs />
      </div>
      <div className="App__view">
        <View />
      </div>
      {/* renderSkills() */}
    </div>
  </Provider>
);

export default Root;
