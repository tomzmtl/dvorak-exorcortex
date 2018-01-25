import actionTypes from '../actionTypes';


const initialState = {
  hit: {
    current: 0,
    total: 0,
  },
  resolve: {
    current: 0,
    total: 0,
  },
  stamina: {
    current: 0,
    total: 0,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HEALTH.INCREMENT:
      return {
        ...state,
        tick: state.tick + 1,
      };

    default: return state;
  }
};
