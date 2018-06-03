import { connect } from 'react-redux';
import { closeSidePanel } from '../../redux/actions/ui';

import component from './component';


const mapState = (state) => {
  const itemId = state.ui.inspect.id;

  return {
    item: itemId ? state.app.inventory.items.find(i => i.id === itemId) : null,
    open: state.ui.sidePanelOpen,
  };
};

const mapActions = dispatch => ({
  closeSidePanel: () => dispatch(closeSidePanel()),
});

export default connect(mapState, mapActions)(component);
