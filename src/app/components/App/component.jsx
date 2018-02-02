import React from 'react';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../../redux/reducers';
import state from '../../redux/store';
// import skills from '../../common/content/skills';

// import Skill from '../Skill/component';
import Tabs from '../Tabs/component';
import Health from '../Health/container';

import '../../../scss/app.scss';
import './styles.scss';


const logger = createLogger({
  collapsed: true,
  diff: true,
});

const store = createStore(reducers, state, applyMiddleware(thunk, logger));

// const renderSkills = () => skills.map((s, i) => <Skill key={i.toString()} {...s} />);

const Root = () => (
  <Provider store={store}>
    <div className="App">
      <div className="App__header">
        <div className="App__title">{'DV0R4K ExoCortex UI'}</div>
        <Tabs />
      </div>
      <div className="App__view">
        <div className="App__section-title">Health & Resolve</div>
        <Health />
        <div className="App__section-title">Armor Class</div>
        <div className="App__section-title">Saving Throws</div>
        <div className="App__section-title">Attack Bonuses</div>
        {/* renderSkills() */}
      </div>
    </div>
  </Provider>
);

export default Root;
