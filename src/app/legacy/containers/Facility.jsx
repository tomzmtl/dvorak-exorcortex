import { connect } from 'react-redux';
import Facility from '../components/Facility/Facility';
import { storeBeer } from '../actions/actions';

const mapStateToProps = state => ({
  storage: state.facility.storage,
});

const mapDispatchToProps = dispatch => ({
  onEquipmentBtnClick: (beer) => {
    dispatch(storeBeer(beer));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Facility);
