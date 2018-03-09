import { connect } from 'react-redux';
import Health from './component';
import { decrement, increment } from '../../redux/actions/health';


const mapState = state => ({
  hit: state.hit,
  resolve: state.resolve,
  stamina: state.stamina,
});

const mapDispatch = dispatch => ({
  decrementStat: item => dispatch(decrement(item)),
  incrementStat: item => dispatch(increment(item)),
});

export default connect(mapState, mapDispatch)(Health);
