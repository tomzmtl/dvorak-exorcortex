import { connect } from 'react-redux';
import View from './component';


const mapState = ({ eac, kac, ui }) => ({
  eac,
  kac,
  selectedTab: ui.selectedTab,
});

export default connect(mapState)(View);
