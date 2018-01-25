import React from 'react';

import './styles.scss';


const Tabs = ({ stamina, hit, resolve }) => (
  <div className="Health">
    <div className="Health__stamina">{stamina.current} / {stamina.total}</div>
    <div className="Health__hit">{hit.current} / {hit.total}</div>
    <div className="Health__resolve">{resolve.current} / {resolve.total}</div>
  </div>
);

export default Tabs;
