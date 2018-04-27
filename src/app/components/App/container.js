import { connect } from 'react-redux';
import View from './component';


const mapState = ({ router }) => ({
  route: router.route,
});

export default connect(mapState)(View);
