import React, { Component } from 'react';
import './ElectricalSystem.css';
import { Collapse, Icon } from 'antd';
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
      url: 'http://www.fomosmt.cn/car/getElectricSystem',
      data: { vin: this.props.vin }
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
    const { Panel } = Collapse;
    return (
      <div className='electrical-system'>
        <div>
          <div className='electrical-system-title'>房车系统故障报警</div>
          <div className='electrical-system-main'>
            <Collapse
              style={{ fontSize: '22px' }}
              bordered={false}
              defaultActiveKey={['1']}
              expandIcon={({ isActive }) => (
                <Icon type='caret-right' rotate={isActive ? 90 : 0} />
              )}
            >
              <Panel className='customPanel' header='逆变器' key='1'>
                <div className='inverter-data'>
                  <span style={{ color: 'green' }}>
                    {inverter.inverterStatus === 0 ? '正常' : '异常'}
                  </span>
                  <span>
                    {inverter.inverterMaintain === null
                      ? '暂无设备需要维护'
                      : 'xxx设备需要维护'}
                  </span>
                </div>
              </Panel>
              <Panel className='customPanel' header='水箱' key='1'>
                <div className='tank-data'>
                  <div className='detail-data'>
                    <span>清水箱</span>
                    <span>{tank.clearWaterTankStatus === 0 ? '满' : '空'}</span>
                    <span>
                      {tank.clearWaterTankMaintain === null
                        ? '暂无设备需要维护'
                        : 'xxx设备需要维护'}
                    </span>
                  </div>
                  <div className='detail-data'>
                    <span>废水箱</span>
                    <span>{tank.wasteWaterTankStatus === 0 ? '满' : '空'}</span>
                    <span>
                      {tank.wasteWaterTankMaintain === null
                        ? '暂无设备需要维护'
                        : 'xxxx设备需要维护'}
                    </span>
                  </div>
                </div>
              </Panel>
              <Panel className='customPanel' header='水泵' key='1'>
                <div className='pump-data'>
                  <div style={{ color: 'green' }}>
                    {waterPump.waterPumpStatus === 0 ? '正常' : '异常'}
                  </div>
                  <div>
                    {waterPump.waterPumpMaintain === null
                      ? '暂无设备需要维护'
                      : 'xxxx设备需要维护'}
                  </div>
                </div>
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>
    );
  }
}
