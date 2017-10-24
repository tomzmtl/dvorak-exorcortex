import React from 'react';
import PropTypes from 'prop-types';

import Masher from '../Masher/component';
import LauterTun from '../LauterTun/component';
import Whirlpool from '../Whirlpool/component';
import Kettle from '../Kettle/component';
import Fermenter from '../Fermenter/component';
import Filter from '../Filter/component';
import Tank from '../Tank/component';


const Chain = ({ currentStep }) => (
  <div className="Chain">
    <Masher />
    <LauterTun />
    <Whirlpool />
    <Kettle />
    <Fermenter />
    <Filter />
    <Tank />
    <div>{currentStep}</div>
  </div>
);

Chain.propTypes = {
  currentStep: PropTypes.string.isRequired,
};

export default Chain;
