import { connect } from 'react-redux';
import SkillsView from './component';


const mapState = ({ inventory }) => ({
  items: inventory.items,
});

export default connect(mapState)(SkillsView);
