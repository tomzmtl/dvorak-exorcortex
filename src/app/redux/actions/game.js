import * as ACTIONS from '../../common/constants/actionTypes';
import { nextBrewCycle } from './facility';


export default null;


export const incrementTick = () => ({
  type: ACTIONS.INCREMENT_TICK,
});

export const openMarketplace = modal => ({
  type: ACTIONS.OPEN_MARKETPLACE_MODAL,
  modal,
});

export const nextTick = () => (dispatch) => {
  dispatch(nextBrewCycle());
  dispatch(incrementTick());
};
