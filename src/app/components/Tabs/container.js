import { connect } from 'react-redux';
import { getRoutePath, navigate } from 'fans-router';

import component from './component';


const mapState = state => ({
  activePath: getRoutePath(state),
});

const mapActions = dispatch => ({
  navigate: to => dispatch(navigate(to)),
});

export default connect(mapState, mapActions)(component);
