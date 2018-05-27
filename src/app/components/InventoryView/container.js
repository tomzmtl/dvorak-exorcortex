import { connect } from 'react-redux';
import SkillsView from './component';


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

export default connect(mapState)(SkillsView);
