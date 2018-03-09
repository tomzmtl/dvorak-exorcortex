import { connect } from 'react-redux';
import View from './component';


const mapState = ({ eac, kac }) => ({
  eac,
  kac,
});

export default connect(mapState)(View);
