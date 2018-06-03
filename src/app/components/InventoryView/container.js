import { connect } from 'react-redux';
import SkillsView from './component';
import { inspectItem } from '../../redux/actions/ui';


const categories = {
  armor: 'Armor',
  grenade: 'Grenades',
  weapon: 'Weapons',
};

const groupCategories = items => Object.keys(categories).map(key => ({
  label: categories[key],
  items: items.filter(({ type }) => type === key),
}));

const mapState = ({ app }) => ({
  categories: groupCategories(app.inventory.items),
});

const mapActions = dispatch => ({
  inspectItem: id => dispatch(inspectItem(id)),
});

export default connect(mapState, mapActions)(SkillsView);
