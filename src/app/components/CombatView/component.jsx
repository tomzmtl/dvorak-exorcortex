import React from 'react';
import Health from '../Health/container';
import Stat from '../Stat/component';

import './styles.scss';


const CombatView = ({
  eac,
  fortitude,
  kac,
  melee,
  ranged,
  reflex,
  thrown,
  will,
}) => (
  <div className="CombatView">
    <div className="App__section-title">Health & Resolve</div>
    <Health />
    <div className="App__section-title">Armor Class</div>
    <div className="App__section">
      <Stat name="KAC" value={kac.base + kac.armorBonus + kac.dexMod + kac.miscMod} />
      <Stat name="EAC" value={eac.base + eac.armorBonus + eac.dexMod + eac.miscMod} />
    </div>
    <div className="App__section-title">Attack Bonuses</div>
    <div className="App__section">
      <Stat name="Melee Attack" value={melee.bab + melee.strMod + melee.miscMod} />
      <Stat name="Ranged Attack" value={ranged.bab + ranged.strMod + ranged.miscMod} />
      <Stat name="Throwns Attack" value={thrown.bab + thrown.strMod + thrown.miscMod} />
    </div>
    <div className="App__section-title">Saving Throws</div>
    <div className="App__section">
      <Stat name="Fortitude" value={fortitude.base + fortitude.abilityMod + fortitude.miscMod} />
      <Stat name="Reflex" value={reflex.base + reflex.abilityMod + reflex.miscMod} />
      <Stat name="Will" value={will.base + will.abilityMod + will.miscMod} />
    </div>
  </div>
);

export default CombatView;
