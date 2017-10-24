import React from 'react';
import { connect } from 'react-redux';

import StatusBar from '../containers/StatusBar';
import Facility from '../containers/Facility';
import Inventory from '../containers/Inventory';
import Modal from '../containers/Modal';
import DebugPanel from '../containers/DebugPanel';

const App = () => (
  <div className="app">
    <StatusBar />
    <Facility />
    <Inventory />
    <Modal />
    <DebugPanel />
  </div>
);

export default connect()(App);
