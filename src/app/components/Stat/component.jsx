import React from 'react';

import './styles.scss';


const Stat = ({ name, value }) => (
  <div className="Stat UiStat">
    <div className="UiStat__name">{name}</div>
    <div className="Stat__value UiStat__value">{value}</div>
  </div>
);

export default Stat;
