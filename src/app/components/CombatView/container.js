import { connect } from 'react-redux';
import View from './component';


const mapState = ({ app }) => ({
  eac: app.eac,
  kac: app.kac,
});

export default connect(mapState)(View);
