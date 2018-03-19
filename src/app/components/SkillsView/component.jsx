import React from 'react';


const renderSkills = (skill, i) => (
  <div className="App__section-title" key={skill.key}>
    {skill.name} : {skill.total}
  </div>
);

const SkillsView = ({ skills }) => (
  <div className="SkillsView">
    {skills.map(renderSkills)}
  </div>
);


export default SkillsView;
