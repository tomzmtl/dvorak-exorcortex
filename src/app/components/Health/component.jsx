import React from 'react';
import PropTypes from 'prop-types';

import HealthCounter from '../HealthCounter/component';
import './styles.scss';


const Tabs = ({ stamina, hit, resolve, decrementStat, incrementStat }) => (
  <div className="Health">
    <HealthCounter
      label="Stamina"
      current={stamina.current}
      total={stamina.total}
      onIncrement={() => incrementStat('stamina')}
      onDecrement={() => decrementStat('stamina')}
    />
    <HealthCounter
      label="HP"
      current={hit.current}
      total={hit.total}
      onIncrement={() => incrementStat('hit')}
      onDecrement={() => decrementStat('hit')}
    />
    <HealthCounter
      label="Resolve"
      current={resolve.current}
      total={resolve.total}
      onIncrement={() => incrementStat('resolve')}
      onDecrement={() => decrementStat('resolve')}
    />
  </div>
);

Tabs.propTypes = {
  stamina: PropTypes.shape({
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }).isRequired,
  hit: PropTypes.shape({
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }).isRequired,
  resolve: PropTypes.shape({
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }).isRequired,
  decrementStat: PropTypes.func.isRequired,
  incrementStat: PropTypes.func.isRequired,
};

export default Tabs;
