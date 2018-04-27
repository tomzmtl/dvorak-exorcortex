import React from 'react';
import PROPTYPES from '../../redux/propTypes';

import Tabs from '../Tabs/container';
import CombatView from '../CombatView/container';
import SkillsView from '../SkillsView/container';
import InventoryView from '../InventoryView/container';

import './styles.scss';


const views = [
  <CombatView />,
  <SkillsView />,
  <InventoryView />,
];

const App = ({ selectedTab }) => (
  <div className="App">
    <div className="App__header">
      <div className="App__title">{'DV0R4K ExoCortex UI'}</div>
      <Tabs selectedTab={selectedTab} />
    </div>
    <div className="App__view">
      {views[selectedTab]}
    </div>
  </div>
);

App.propTypes = {
  selectedTab: PROPTYPES.ui.selectedTab.isRequired,
};

export default App;
