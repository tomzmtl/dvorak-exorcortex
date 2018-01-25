import ACTIONS from '../actionTypes';
import { hasActiveEquipment } from '../selectors/facility';


export default null;

export const nextBrewCycle = () => (dispatch, getState) => {
  if (hasActiveEquipment(getState())) {
    dispatch({
      type: ACTIONS.FACILITY.NEXT_BREW_CYCLE,
    });
  }
};

export const startLine = () => ({
  type: ACTIONS.FACILITY.START_LINE,
});
