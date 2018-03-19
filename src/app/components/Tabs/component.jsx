import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import PROPTYPES from '../../redux/propTypes';

import './styles.scss';


const renderTab = (index, label, selectedIndex, handleClick) => {
  const classes = classnames({
    Tabs__tab: true,
    'Tabs__tab--active': index === selectedIndex,
  });

  return <div className={classes} onClick={() => handleClick(index)}>{label}</div>;
};

const Tabs = ({ changeTab, selectedTab }) => (
  <div className="Tabs">
    {renderTab(0, 'Combat', selectedTab, changeTab)}
    {renderTab(1, 'Skills', selectedTab, changeTab)}
  </div>
);

Tabs.propTypes = {
  changeTab: PropTypes.func.isRequired,
  selectedTab: PROPTYPES.ui.selectedTab.isRequired,
};

export default Tabs;
