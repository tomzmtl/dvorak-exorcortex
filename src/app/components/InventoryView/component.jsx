import React from 'react';
import PropTypes from 'prop-types';
import InventoryItem from '../InventoryItem/component';
import Stat from '../Stat/component';

import './styles.scss';


const renderItems = (categories, inspectItem) => categories.map(cat => (
  <div className="InventoryView__category" key={cat.label}>
    <div className="App__section-title">{cat.label}</div>
    <div className="App__section">
      {cat.items.map(item =>
        <InventoryItem item={item} onTouchStart={() => inspectItem(item.id)} key={item.id} />
      )}
    </div>
  </div>
));

const InventoryView = ({ categories, inspectItem }) => (
  <div className="InventoryView View">
    <div className="InventoryView__category InventoryView__money">
      <div className="App__section">
        <Stat name="ISK" value={1684} />
      </div>
    </div>
    {renderItems(categories, inspectItem)}
  </div>
);

InventoryView.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};


export default InventoryView;
