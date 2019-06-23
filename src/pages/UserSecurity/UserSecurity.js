import React, { Component } from 'react';
import './UserSecurity.css';
import { Divider, Switch } from 'antd';
// import UserSecurityData from './UserSecurityData';
import Axios from 'axios';

export default class UserSecurity extends Component {
  constructor() {
    super();
    this.state = {
      intelligentControl: [],
      environmentalSystem: {}
    };
  }
  componentWillMount() {
    Axios({
      method: 'get',
      url: 'http://www.fomosmt.cn/car/operating/getUserSafeOrOperating',
      data: { vin: this.props.vin }
    }).then(res => {
      const data = res.data.data;
      this.setState({
        intelligentControl: data.intelligentControl,
        environmentalSystem: data.environmentalSystem
      });
    });
  }
  render() {
    const { intelligentControl, environmentalSystem } = this.state;
    return (
      <div className='user-security'>
        <div className='user-security-main'>
          <div className='license-plate'>闽Dxxxxx</div>
          <div style={{ margin: '50px auto', fontSize: '22px' }}>
            <div>智能操控</div>
            <Divider />
            {intelligentControl.map((value, index) => {
              return (
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  {value.intelligentControlName}
                  <Switch
                    checkedChildren='开'
                    unCheckedChildren='关'
                    defaultChecked={value.intelligentControlStatus}
                  />
                </div>
              );
            })}
          </div>
          <div style={{ fontSize: '22px' }}>
            <div>环境系统</div>
            <Divider />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              CO<div>{`${environmentalSystem.CO}g`}</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              CO2<div>{`${environmentalSystem.CO2}g`}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
