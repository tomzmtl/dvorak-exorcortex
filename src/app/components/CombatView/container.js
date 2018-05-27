import { connect } from 'react-redux';
import View from './component';


const mapState = ({ app }) => ({
  eac: app.eac,
  kac: app.kac,
  melee: app.attackBonuses.melee,
  ranged: app.attackBonuses.ranged,
  thrown: app.attackBonuses.thrown,
  fortitude: app.savingThrows.fortitude,
  reflex: app.savingThrows.reflex,
  will: app.savingThrows.will,
});

export default connect(mapState)(View);
