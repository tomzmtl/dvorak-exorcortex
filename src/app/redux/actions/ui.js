import actionTypes from '../actionTypes';


export default null;

export const changeTab = index => ({
  type: actionTypes.TAB.CHANGE,
  index,
});

export const inspectItem = id => ({
  type: 'UPDATE_INSPECT_TARGET',
  id,
});

export const closeSidePanel = () => ({
  type: 'CLOSE_SIDE_PANEL',
});
