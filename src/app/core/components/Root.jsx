import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import StatusBar from '../../legacy/containers/StatusBar';
import Facility from '../../facility/Facility/component';
import Inventory from '../../legacy/containers/Inventory';
import Modal from '../../legacy/containers/Modal';
import DebugPanel from '../../legacy/containers/DebugPanel';

import reducer from '../../legacy/reducers/reducer';
import store from '../../legacy/store/initialState';

import '../../../scss/app.scss';


export default () => (
  <Provider store={createStore(reducer, store)}>
    <div className="app">
      <StatusBar />
      <Facility />
      <Inventory />
      <Modal />
      <DebugPanel />
    </div>
  </Provider>
);
