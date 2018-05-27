import React from 'react';
import PropTypes from 'prop-types';
import InventoryItem from '../InventoryItem/component';

import './styles.scss';


const renderItems = categories => categories.map(cat => (
  <div className="InventoryView__category" key={cat.label}>
    <div className="App__section-title">{cat.label}</div>
    <div className="App__section">
      {cat.items.map((item, i) => <InventoryItem key={i.toString()} item={item} />)}
    </div>
  </div>
));

const InventoryView = ({ categories }) => (
  <div className="InventoryView">
    {renderItems(categories)}
  </div>
);

InventoryView.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};


export default InventoryView;
