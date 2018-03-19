import { connect } from 'react-redux';
import View from './component';


const mapState = ({ ui }) => ({
  selectedTab: ui.selectedTab,
});

export default connect(mapState)(View);
