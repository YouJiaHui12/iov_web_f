import React, { Component } from 'react';
import RentalInformationData from './RentalInformationData';
import { Table } from 'antd';

export default class RentalInformation extends Component {
  constructor() {
    super();
    this.state = {
      rentalmessages: null
    };
  }
  componentWillMount() {
    const { rentalmessages } = RentalInformationData;
    this.setState({
      rentalmessages: rentalmessages
    });
  }
  render() {
    const columns = [
      {
        title: '订单号',
        dataIndex: '订单号',
        key: '订单号'
      },
      {
        title: 'VIN',
        dataIndex: 'VIN',
        key: 'VIN'
      },
      {
        title: '车牌',
        dataIndex: '车牌',
        key: '车牌'
      },
      {
        title: '租赁人',
        dataIndex: '租赁人',
        key: '租赁人'
      }
    ];
    const { rentalmessages } = this.state;
    return (
      <div className='rental-infor' style={{ marginTop: '30px' }}>
        <div className='rental-infor-main' style={{ marginTop: '30px' }}>
          <div
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              textAlign: 'center'
            }}
          >
            车辆租赁信息
          </div>
          <div
            className='rental-infor-form'
            style={{ textAlign: 'center', marginTop: '36px' }}
          >
            <Table columns={columns} dataSource={rentalmessages} />
          </div>
        </div>
      </div>
    );
  }
}
