import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '../Tabs/component';
import CombatView from '../CombatView/container';
import SkillsView from '../SkillsView/container';
import InventoryView from '../InventoryView/container';

import './styles.scss';


const views = {
  root: <div>{'DV0R4K LVL.3'}</div>,
  'root.combat': <CombatView />,
  'root.skills': <SkillsView />,
  'root.inventory': <InventoryView />,
};

const App = ({ route }) => (
  <div className="App">
    <div className="App__header">
      <div className="App__title">{'DV0R4K ExoCortex UI'}</div>
      <Tabs selectedTab={Object.keys(views).findIndex(key => key === route.name)} />
    </div>
    <div className="App__view">
      {views[route.name]}
    </div>
  </div>
);

App.propTypes = {
  route: PropTypes.shape().isRequired,
};

App.defaultProps = {
  selectedTab: 0,
};

export default App;
