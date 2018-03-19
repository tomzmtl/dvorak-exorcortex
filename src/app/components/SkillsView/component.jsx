import React from 'react';
import classnames from 'classnames';
import PROPTYPES from '../../redux/propTypes';

import './styles.scss';


const renderSkill = (skill) => {
  const classes = classnames({
    SkillsView__skill: true,
    'SkillsView__skill--medium': skill.total < 7 && skill.total > 3,
    'SkillsView__skill--weak': skill.total <= 3,
  });

  return (
    <div className={classes} key={skill.key}>
      <div className="SkillsView__name">{skill.name}</div>
      <div className="SkillsView__total">{skill.total}</div>
    </div>
  );
};

const SkillsView = ({ skills }) => (
  <div className="SkillsView">
    <div className="SkillsView__col">
      {skills.slice(0, 10).map(renderSkill)}
    </div>
    <div className="SkillsView__col">
      {skills.slice(10).map(renderSkill)}
    </div>
  </div>
);

SkillsView.propTypes = {
  skills: PROPTYPES.skills.isRequired,
};


export default SkillsView;
