import React, { Component } from 'react';
import './ElectricalSystem.css';
// import ElectricalSystemData from './ElectricalSystemData';
import Axios from 'axios';
export default class ElectricalSystem extends Component {
  constructor() {
    super();
    this.state = {
      inverter: {},
      tank: {},
      waterPump: {}
    };
  }
  componentWillMount() {
    Axios({
      method: 'get',
      url: 'http://www.fomosmt.cn/car/getElectricSystem'
    }).then(res => {
      const data = res.data.data;
      this.setState({
        inverter: data.inverter,
        tank: data.tank,
        waterPump: data.waterPump
      });
    });
  }

  render() {
    const { inverter, tank, waterPump } = this.state;
    return (
      <div className='electrical-system'>
        <div>
          <div className='electrical-system-main'>房车系统故障报警</div>
          <div className='elec-system-form'>
            <div className='elec-inverter'>
              <div>逆变器</div>
              <div style={{ color: 'green' }}>
                {inverter.inverterStatus === 0 ? '正常' : '异常'}
              </div>
              <div>
                {inverter.inverterMaintain === null
                  ? '暂无设备需要维护'
                  : 'xxx设备需要维护'}
              </div>
            </div>
            <div className='waterTank'>
              <div>水箱</div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className='clearWaterTank'>
                  <div>清水箱</div>
                  <div>{tank.clearWaterTankStatus === 0 ? '满' : '空'}</div>
                  <div>
                    {tank.clearWaterTankMaintain === null
                      ? '暂无设备需要维护'
                      : 'xxx设备需要维护'}
                  </div>
                </div>
                <div className='wasteWaterTank'>
                  <div>废水箱</div>
                  <div>{tank.wasteWaterTankStatus === 0 ? '满' : '空'}</div>
                  <div>
                    {tank.wasteWaterTankMaintain === null
                      ? '暂无设备需要维护'
                      : 'xxxx设备需要维护'}
                  </div>
                </div>
              </div>
            </div>
            <div className='elec-water-pump'>
              <div>水泵</div>
              <div style={{ color: 'green' }}>
                {waterPump.waterPumpStatus === 0 ? '正常' : '异常'}
              </div>
              <div>
                {waterPump.waterPumpMaintain === null
                  ? '暂无设备需要维护'
                  : 'xxxx设备需要维护'}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
