import React, { Component } from 'react';

export default class ElectricalSystem extends Component {
  render() {
    return (
      <div className='electrical-system' style={{ marginTop: '30px' }}>
        <div
          className='electrical-system-main'
          style={{ marginTop: '30px', backgroundColor: 'white' }}
        >
          <div
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              textAlign: 'center'
            }}
          >
            房车系统故障报警
          </div>
          <div
            className='elec-system-form'
            style={{
              marginTop: '36px',
              backgroundColor: 'white',
              border: '1px solid',
              minHeight: '300px',
              display: 'flex',
              flexDirection: 'column',
              fontSize: '18px'
            }}
          >
            <div
              className='elec-inverter'
              style={{
                border: '1px solid',
                flex: '1',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div>逆变器</div>
              <div style={{ color: 'green' }}>正常</div>
              <div>暂无设备需要维护</div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                border: '1px solid',
                padding: '30px 0 30px 0'
              }}
            >
              <div>水箱</div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '800px'
                  }}
                >
                  <div>清水箱</div>
                  <div>空</div>
                  <div>暂无设备需要维护</div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '800px'
                  }}
                >
                  <div>废水箱</div>
                  <div>空</div>
                  <div>暂无设备需要维护</div>
                </div>
              </div>
            </div>
            <div
              className='elec-water-pump'
              style={{
                border: '1px solid',
                flex: '1',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div>水泵</div>
              <div style={{ color: 'green' }}>正常</div>
              <div>暂无设备需要维护</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
