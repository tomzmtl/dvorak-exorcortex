import ACTIONS from '../actionTypes';


export default (state = {}, action = {}) => {
  switch (action.type) {
    case ACTIONS.HEALTH.INCREMENT: {
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

    case ACTIONS.TAB.CHANGE:
      if (state.ui.selectedTab !== action.index) {
        return {
          ...state,
          ui: {
            ...state.ui,
            selectedTab: action.index,
          },
        };
      }
      return state;

    default: return state;
  }
};
