import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';


const InventoryItem = ({ item }) => (
  <div className="InventoryItem UiStat">
    <div className="UiStat__name">{item.name}</div>
  </div>
);

InventoryItem.propTypes = {
  item: PropTypes.shape().isRequired,
};


export default InventoryItem;
