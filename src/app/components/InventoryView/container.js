import { connect } from 'react-redux';
import SkillsView from './component';


const mapState = ({ app }) => ({
  items: app.inventory.items,
});

export default connect(mapState)(SkillsView);
