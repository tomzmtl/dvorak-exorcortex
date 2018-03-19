import { connect } from 'react-redux';
import SkillsView from './component';


const mapState = ({ skills }) => ({
  skills: skills.sort((a, b) => (a.total > b.total ? -1 : 1)),
});

export default connect(mapState)(SkillsView);
