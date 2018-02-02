import actionTypes from '../actionTypes';


export default null;

export const increment = item => ({
  type: actionTypes.HEALTH.INCREMENT,
  increment: 1,
  item,
});

export const decrement = item => ({
  type: actionTypes.HEALTH.INCREMENT,
  increment: -1,
  item,
});
