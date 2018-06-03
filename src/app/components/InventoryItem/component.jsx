import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';


const InventoryItem = ({ item, onTouchStart }) => (
  <div className="InventoryItem UiStat" onTouchStart={onTouchStart}>
    <div className="UiStat__name">{item.name}</div>
  </div>
);

InventoryItem.propTypes = {
  item: PropTypes.shape().isRequired,
};


export default InventoryItem;
