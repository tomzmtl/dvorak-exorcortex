import ACTIONS from '../actionTypes';


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
  eac: {
    base: 0,
    armorBonus: 0,
    dexMod: 0,
    miscMod: 0,
  },
  kac: {
    base: 0,
    armorBonus: 0,
    dexMod: 0,
    miscMod: 0,
  },
  acVsComMan: {
    base: 0,
    upgrades: 0,
  },
};

export default (state = initialState, action = {}) => {
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
