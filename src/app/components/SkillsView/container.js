import { connect } from 'react-redux';
import SkillsView from './component';


const mapSkill = ({ key, name, stats }) => ({
  key,
  name,
  total: stats.ranks + stats.classBonus + stats.abilityMod + stats.miscMod,
});

const mapState = ({ app }) => ({
  skills: app.skills.map(mapSkill).sort((a, b) => (a.total > b.total ? -1 : 1)),
});

export default connect(mapState)(SkillsView);
