import React, { Component } from 'react';
import { Button, Select } from 'antd';
const Option = Select.Option;

export default class BasicInformationEntry extends Component {
  render() {
    return (
      <div className='basic-infor-entry' style={{ marginTop: '30px' }}>
        <div
          className='basic-infor-entry-main'
          style={{ backgroundColor: '#fff' }}
        >
          <div
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              textAlign: 'center'
            }}
          >
            车辆基本信息录入
          </div>
          <div
            className='entry-form'
            style={{
              margin: '36px auto',
              display: 'flex',
              justifyContent: 'space-between',
              width: '400px'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                minHeight: '300px'
              }}
            >
              <sapn
                style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  marginRight: '30px'
                }}
              >
                VIN
              </sapn>
              <sapn
                style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  marginRight: '30px'
                }}
              >
                品牌
              </sapn>
              <sapn
                style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  marginRight: '30px'
                }}
              >
                车牌
              </sapn>
              <sapn
                style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  marginRight: '30px'
                }}
              >
                底盘信息
              </sapn>
              <sapn
                style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  marginRight: '30px'
                }}
              >
                房车类型
              </sapn>
              <sapn
                style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  marginRight: '30px'
                }}
              >
                其他
              </sapn>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
              }}
            >
              <input className='entry-vin' style={{ width: '200px' }} />
              <input className='entry-brand' style={{ width: '200px' }} />
              <input
                className='entry-license-plate'
                style={{ width: '200px' }}
              />
              <input
                className='entry-chassis-infor'
                style={{ width: '200px' }}
              />
              <Select defaultValue='请选择' style={{ width: '200px' }}>
                <Option value='小型/2床'>小型/2床</Option>
                <Option value='中型/3床'>中型/3床</Option>
                <Option value='大型/4床'>大型/4床</Option>
              </Select>
              <input className='entry-other' style={{ width: '200px' }} />
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              margin: 'auto',
              width: '300px',
              paddingBottom: '20px'
            }}
          >
            <Button type='primary'>提交</Button>
            <Button type='primary'>重置</Button>
          </div>
        </div>
      </div>
    );
  }
}
