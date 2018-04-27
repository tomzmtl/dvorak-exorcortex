import React from 'react';
import PropTypes from 'prop-types';
import InventoryItem from '../InventoryItem/component';

import './styles.scss';


const renderItems = items => items.map((item, i) => (
  <InventoryItem key={i.toString()} item={item} />
));

const InventoryView = ({ items }) => (
  <div className="InventoryView">
    {renderItems(items)}
  </div>
);

InventoryView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};


export default InventoryView;
