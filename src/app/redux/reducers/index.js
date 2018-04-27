import { reducer as routerReducer } from 'fans-router';
import app from './app';


export default (state = {}, action) => ({
  app: app(state.app, action, state),
  router: routerReducer(state.router, action, state),
});
