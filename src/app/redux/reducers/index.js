import health from './health';


export default (state = {}, action = {}) => ({
  health: health(state.health, action, state),
});
