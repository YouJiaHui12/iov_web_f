import React, { Component } from 'react';
import { Divider, Switch } from 'antd';

export default class UserSecurity extends Component {
  render() {
    return (
      <div
        className='user-security'
        style={{
          marginTop: '30px',
          backgroundColor: 'white',
          minHeight: '600px'
        }}
      >
        <div
          className='user-security-main'
          style={{
            marginTop: '30px',
            margin: 'auto',
            width: '600px'
          }}
        >
          <div
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              textAlign: 'center'
            }}
          >
            闽Dxxxxx
          </div>
          <div style={{ margin: '70px auto', fontSize: '18px' }}>
            <div>智能操控</div>
            <Divider />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              防盗模式
              <Switch
                checkedChildren='开'
                unCheckedChildren='关'
                defaultChecked
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              季节模式
              <Switch
                checkedChildren='开'
                unCheckedChildren='关'
                defaultChecked
              />
            </div>
          </div>
          <div style={{ fontSize: '18px' }}>
            <div>环境系统</div>
            <Divider />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              CO<div>20g</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              CO2<div>100g</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
