import React from 'react';
import Health from '../Health/container';
import Stat from '../Stat/component';


const CombatView = ({ eac, kac, selectedTab }) => (
  <div className="CombatView">
    <div className="App__section-title">Health & Resolve</div>
    <Health />
    <div className="App__section-title">Armor Class</div>
    <div className="App__section">
      <Stat name="KAC" value={kac.base + kac.armorBonus + kac.dexMod + kac.miscMod} />
      <Stat name="EAC" value={eac.base + eac.armorBonus + eac.dexMod + eac.miscMod} />
    </div>
    <div className="App__section-title">Saving Throws</div>
    <div className="App__section-title">Attack Bonuses</div>
  </div>
);


export default CombatView;