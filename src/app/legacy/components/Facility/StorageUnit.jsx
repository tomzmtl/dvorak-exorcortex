import React from 'react';
import * as GAME from '../../constants/game';

function renderItems(storage) {
  const items = [];
  for (let i = 1; i <= GAME.STORAGE_LIMIT; i += 1) {
    let className = null;
    const style = {};
    if (storage.length >= i) {
      className = 'full';
      style.backgroundColor = storage[i - 1].color;
    }
    items.push((<li className={className} style={style} key={i} />));
  }
  return items;
}

const StorageUnit = (props) => {
  const items = renderItems(props.storage);

  return (
    <div className="storage equipment">
      <div className="name">Storage Unit</div>
      <ul>{items}</ul>
    </div>
  );
};

export default StorageUnit;
