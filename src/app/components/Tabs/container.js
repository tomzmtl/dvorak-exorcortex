import { connect } from 'react-redux';

import { changeTab } from '../../redux/actions/ui';
import Tabs from './component';


const mapState = (state, ownProps) => ({
  ...ownProps,
});

const mapActions = dispatch => ({
  changeTab: index => dispatch(changeTab(index)),
});

export default connect(mapState, mapActions)(Tabs);
