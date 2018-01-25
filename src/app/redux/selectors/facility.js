export default null;

export const getEquipmentByName = (state, name) => state.line.equipment.find(e => e.name === name);

export const getActiveEquipment = state => state.line.equipment.find(e => e.active);

export const hasActiveEquipment = state => state.line.equipment.some(e => e.active);
