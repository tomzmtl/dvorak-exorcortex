import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Button = ({ onClick, children }) => (
  <div className="Button">
    <button className="Button__button" onClick={onClick}>
      {children}
    </button>
  </div>
);

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  children: null,
};

export default Button;
