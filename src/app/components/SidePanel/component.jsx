import React from 'react';
import classnames from 'classnames';

import './styles.scss';


const SidePanel = ({ open, item, closeSidePanel }) => {
  const classes = classnames({
    SidePanel: true,
    'SidePanel--open': open,
  });

  return (
    <div className={classes} onTouchStart={() => closeSidePanel()}>
      {item ? <pre>{JSON.stringify(item, null, 2)}</pre> : null}
    </div>
  );
};

export default SidePanel;
