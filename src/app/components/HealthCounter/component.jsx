import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';


const HealthCounter = ({ label, current, total, onIncrement, onDecrement }) => {
  const third = Math.round(total / 3);

  const max = current === total;
  const zero = current === 0;

  const classes = classnames({
    HealthCounter: true,
    'HealthCounter--max': max,
    'HealthCounter--medium': current <= (third * 2),
    'HealthCounter--low': current <= third,
    'HealthCounter--zero': zero,
  });

  const incClasses = classnames({
    HealthCounter__action: true,
    'HealthCounter__action--disabled': max,
  });

  const decClasses = classnames({
    HealthCounter__action: true,
    'HealthCounter__action--disabled': zero,
  });

  return (
    <div className={classes}>
      <div className="HealthCounter__label">
        <span className="HealthCounter__title">{label}</span>
        <span className="HealthCounter__total">{total}</span>
      </div>
      <div className="HealthCounter__display">
        <div className="HealthCounter__points">
          <span className="HealthCounter__current">{current}</span>
        </div>
        <div className="HealthCounter__actions">
          <div className={incClasses} onClick={max ? null : onIncrement}>
            <span>+</span>
          </div>
          <div className={decClasses} onClick={zero ? null : onDecrement}>
            <span>-</span>
          </div>
        </div>
      </div>
    </div>
  );
};

HealthCounter.propTypes = {
  label: PropTypes.string.isRequired,
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default HealthCounter;
