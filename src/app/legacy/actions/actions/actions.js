import * as ACTIONS from '../constants/actionTypes';
// import fetch from 'isomorphic-fetch';

// const baseURL = typeof window === 'undefined' ? process.env.BASE_URL || (`http://localhost:${(process.env.PORT || 8000)}`) : '';

const incrementTick = () => ({
  type: ACTIONS.INCREMENT_TICK,
});

const storeBeer = beer => ({
  type: ACTIONS.STORE_BEER,
  beer,
});

const sellBeer = quantity => ({
  type: ACTIONS.SELL_BEER,
  quantity,
});

/*
const addInventoryItem = (item) => {
  return {
    type: ACTIONS.ADD_INVENTORY_ITEM,
    item,
  };
};
*/

const openMarketplace = modal => ({
  type: ACTIONS.OPEN_MARKETPLACE_MODAL,
  modal,
});

const closeModal = () => ({
  type: ACTIONS.CLOSE_MODAL,
});

const buyMarketPlaceItem = item => ({
  type: ACTIONS.BUY_MARKETPLACE_ITEM,
  item,
});

export {
  incrementTick,
  storeBeer,
  sellBeer,
  // addInventoryItem,
  openMarketplace,
  closeModal,
  buyMarketPlaceItem,
};
