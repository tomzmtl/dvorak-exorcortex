import React from 'react';

import './styles.scss';


const Tabs = () => (
  <div className="Tabs">
    <div className="Tabs__tab Tabs__tab--active">Combat</div>
    <div className="Tabs__tab">Skills</div>
    <div className="Tabs__tab">Stats</div>
  </div>
);

export default Tabs;
