import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '../Tabs/container';
import CombatView from '../CombatView/container';
import SkillsView from '../SkillsView/container';
import InventoryView from '../InventoryView/container';
import SidePanel from '../SidePanel/container';

import './styles.scss';


const appendHerokuVersion = () => process.env.HEROKU_RELEASE_VERSION || 'vXX';

const views = {
  root: <div className="View">{'DV0R4K LVL.4'}</div>,
  'root.combat': <CombatView />,
  'root.skills': <SkillsView />,
  'root.inventory': <InventoryView />,
};

const App = ({ route }) => (
  <div className="App">
    <div className="App__header">
      <div className="App__title">
        {`DV0R4K ExoCortex UI ${appendHerokuVersion()}`}
      </div>
      <Tabs selectedTab={Object.keys(views).findIndex(key => key === route.name)} />
    </div>
    <div className="App__view">
      {views[route.name]}
      <SidePanel />
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
