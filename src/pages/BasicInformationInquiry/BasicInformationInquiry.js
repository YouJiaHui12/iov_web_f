import React, { Component } from 'react';
import { Input, Select, Button, Table, Divider } from 'antd';
import BasicInformationInquiryData from './BasicInformationInquirydata';
const Option = Select.Option;

export default class BasicInformationInquiry extends Component {
  constructor() {
    super();
    this.state = {
      carmessageslist: null
    };
  }
  componentWillMount() {
    const { carmessageslist } = BasicInformationInquiryData;
    this.setState({
      carmessageslist: carmessageslist
    });
  }
  render() {
    const columns = [
      {
        title: '车辆ID',
        dataIndex: '车辆ID',
        key: '车辆ID'
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
        title: '车辆类型',
        dataIndex: '车辆类型',
        key: '车辆类型'
      },
      {
        title: '底盘信息',
        dataIndex: '底盘信息',
        key: '底盘信息'
      },
      {
        title: '租赁状态',
        dataIndex: '租赁状态',
        key: '租赁状态'
      },
      {
        title: '操作',
        key: '操作',
        render: () => (
          <span>
            <a href='javascript:;'>查看</a>
            <Divider type='vertical' />
            <a href='javascript:;'>编辑</a>
            <Divider type='vertical' />
            <a href='javascript:;'>删除</a>
          </span>
        )
      }
    ];

    const { carmessageslist } = this.state;
    return (
      <div className='basic-infor-inpuiry' style={{ marginTop: '30px' }}>
        <div
          className='basic-infor-inpuiry-main'
          style={{
            background: '#fff'
          }}
        >
          <div
            className='basic-infor-inpuiry-main-top'
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              minHeight: '75px',
              alignItems: 'center',
              margin: '0 110px'
            }}
          >
            <div>
              车辆ID：
              <Input placeholder='请输入' style={{ width: '200px' }} />
            </div>
            <div>
              状态：
              <Select defaultValue='请选择' style={{ width: '200px' }}>
                <Option value='空闲'>空闲</Option>
                <Option value='已租'>已租</Option>
              </Select>
              <Button type='primary' style={{ marginLeft: '50px' }}>
                查询
              </Button>
            </div>
            <Button type='primary'>添加车辆</Button>
          </div>
          <div className='basic-infor-inpuiry-main-middle'>
            <Table columns={columns} dataSource={carmessageslist} />
          </div>
        </div>
      </div>
    );
  }
}
