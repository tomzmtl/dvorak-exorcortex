import ACTIONS from '../actionTypes';


export default (state = {}, action = {}) => {
  switch (action.type) {
    case 'UPDATE_INSPECT_TARGET':
      return {
        ...state,
        sidePanelOpen: true,
        inspect: {
          type: 'inventory',
          id: action.id,
        },
      };

    case 'CLOSE_SIDE_PANEL':
      return {
        ...state,
        sidePanelOpen: false,
        inspect: {
          type: 'inventory',
          id: null,
        },
      };

    default: return state;
  }
};
