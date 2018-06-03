import React from 'react';
import classnames from 'classnames';

import './styles.scss';


const Tabs = ({ activePath, navigate }) => {
  const renderTab = (label, to) => {
    const classes = classnames({
      Tabs__tab: true,
      'Tabs__tab--active': activePath === to,
    });
    return (
      <div className={classes} onTouchStart={() => navigate(to)}>{label}</div>
    );
  };

  return (
    <div className="Tabs">
      {renderTab('Dashboard', '/')}
      {renderTab('Combat', '/combat')}
      {renderTab('Skills', '/skills')}
      {renderTab('Inventory', '/inventory')}
    </div>
  );
};

export default Tabs;
