import React from 'react';

import './styles.scss';


const renderDescription = paragraphs => paragraphs.map((p, i) => <p key={i.toString()}>{p}</p>);

const renderGain = (gain) => {
  if (!gain) {
    return null;
  }
  return gain.map((l, i) => <p key={i.toString()}>Level {l.level}: {l.description}</p>);
};

const Skill = ({ name, description, gain }) => (
  <div className="Skill">
    <div className="Skill__name">{name}</div>
    <div className="Skill__description">{renderDescription(description)}</div>
    <div className="Skill__gain">{renderGain(gain)}</div>
  </div>
);

export default Skill;
