import { connect } from 'react-redux';
import Health from './component';


const mapState = state => ({
  hit: state.health.hit,
  resolve: state.health.resolve,
  stamina: state.health.stamina,
});

export default connect(mapState)(Health);
