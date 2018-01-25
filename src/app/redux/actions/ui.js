import ACTIONS from '../actionTypes';


export default null;

export const toggleEquipmentPanel = (equipmentName, force = null) => ({
  type: ACTIONS.UI.TOGGLE_EQUIPMENT_PANEL,
  equipmentName,
  force,
});
