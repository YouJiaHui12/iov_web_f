import React, { Component } from 'react';
import { Tabs } from 'antd';
import VehicleStatus from '../VehicleStatus/VehicleStatus';
import ElectricalSystem from '../ElectricalSystem/ElectricalSystem';
import UserSecurity from '../UserSecurity/UserSecurity';

const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}

export default class MonitoringIndex extends Component {
  componentWillMount() {
    console.log(this.props.match.params.vin);
  }
  render() {
    return (
      <div>
        <Tabs defaultActiveKey='VehicleStatus' onChange={callback}>
          <TabPane tab='车辆状态及行车安全' key='VehicleStatus'>
            <VehicleStatus vin={this.props.match.params.vin} />
          </TabPane>
          <TabPane tab='电器系统及相关功能性系统' key='ElectricalSystem'>
            <ElectricalSystem vin={this.props.match.params.vin} />
          </TabPane>
          <TabPane tab='用户安全及智能控制' key='UserSecurity'>
            <UserSecurity vin={this.props.match.params.vin} />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
