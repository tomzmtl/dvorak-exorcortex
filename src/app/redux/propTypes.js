import PropTypes from 'prop-types';

const skill = PropTypes.shape({
  key: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
});

export default {
  skills: PropTypes.arrayOf(skill.isRequired),
  ui: {
    selectedTab: PropTypes.number,
  },
};
