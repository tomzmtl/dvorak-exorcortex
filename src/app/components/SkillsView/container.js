import { connect } from 'react-redux';
import SkillsView from './component';


const mapState = ({ skills }) => ({
  skills,
});

export default connect(mapState)(SkillsView);
