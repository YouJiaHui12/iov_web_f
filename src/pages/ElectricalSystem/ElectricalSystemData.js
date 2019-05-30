const ElectricalSystemData = {
  data: {
    inverter: {
      inverterStatus: 0,
      inverterMaintain: null
    },
    tank: {
      clearWaterTankStatus: 0,
      wasteWaterTankStatus: 1,
      clearWaterTankMaintain: null,
      wasteWaterTankMaintain: 'XXX需要维护'
    },
    waterPump: {
      waterPumpStatus: 0,
      waterPumpMaintain: null
    }
  }
};
export default ElectricalSystemData;
