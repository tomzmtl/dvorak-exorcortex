import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';


const InventoryItem = ({ item }) => (
  <div className="InventoryItem">
    {item.type} : {item.name}
  </div>
);

InventoryItem.propTypes = {
  item: PropTypes.shape().isRequired,
};


export default InventoryItem;
