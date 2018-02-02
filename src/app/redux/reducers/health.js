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
    case actionTypes.HEALTH.INCREMENT: {
      const { item, increment } = action;
      const stat = state[item];
      const test = increment < 0 ? stat.current === 0 : stat.current === stat.total;
      const value = test ? stat.current : stat.current + increment;
      return {
        ...state,
        [item]: {
          ...stat,
          current: value,
        },
      };
    }

    default: return state;
  }
};
