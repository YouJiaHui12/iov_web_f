import React, { Component } from 'react';
import './RentalInformation.css';
import RentalInformationData from './RentalInformationData';
import { Table } from 'antd';
import Axios from 'axios';

export default class RentalInformation extends Component {
  constructor() {
    super();
    this.state = {
      rentalmessages:[]
    };
  }
  componentWillMount() {
    Axios({
      method: 'get',
      url: 'http://www.fomosmt.cn/car/rent/listRentInfo'
    }).then(res => {
      const data = res.data.data;
      this.setState({
        rentalmessages: data.rentalmessages,
      });
    });
  }
  render() {
    const columns = [
      {
        title: '订单号',
        dataIndex: 'orderNumber',
        key: 'orderNumber'
      },
      {
        title: 'VIN',
        dataIndex: 'VIN',
        key: 'VIN'
      },
      {
        title: '车牌',
        dataIndex: 'licensePlate',
        key: 'licensePlate'
      },
      {
        title: '租赁人',
        dataIndex: 'leasePerson',
        key: 'leasePerson'
      }
    ];
    const { rentalmessages } = this.state;
    return (
      <div className='rental-infor' style={{ marginTop: '30px' }}>
        <div style={{ marginTop: '30px' }}>
          <div className='rental-infor-main'>车辆租赁信息</div>
          <div className='rental-infor-form'>
            <Table columns={columns} dataSource={rentalmessages} />
          </div>
        </div>
      </div>
    );
  }
}
