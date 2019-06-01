import React, { Component } from 'react';
import './BasicInformationInquiry.css';
import {
  Input,
  // Select,
  Button,
  Table,
  Divider,
  Form,
  Popconfirm,
  message
} from 'antd';
import Axios from 'axios';
import Qs from 'qs';
// const Option = Select.Option;

class BasicInformationInquiry extends Component {
  constructor() {
    super();
    this.state = {
      carmessageslist: []
    };
  }
  componentWillMount() {
    var timestamp = new Date().valueOf();
    Axios({
      method: 'get',
      url: 'https://www.fomosmt.cn/car/carInfo/listCarInfo',
      params: { time: timestamp }
    }).then(res => {
      const data = res.data.data;
      console.log(data);
      this.setState({
        carmessageslist: data.carmessageslist
      });
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values.VIN);
        Axios({
          method: 'get',
          url: 'https://www.fomosmt.cn/car/carInfo/getCarInfoByVin',
          params: { vin: values.VIN }
        })
          .then(res => {
            console.log(res.data.data);
            const {
              carPlate,
              vin,
              carType,
              carChassis,
              carStatus,
              carID
            } = res.data.data;
            const searchdata = {
              key: carID,
              carID: carID,
              VIN: vin,
              licensePlate: carPlate,
              vehicleType: carType,
              chassiscInformation: carChassis,
              leaseStatus: carStatus
            };
            const newlist = [];
            newlist.push(searchdata);
            this.setState({
              carmessageslist: newlist
            });
          })
          .catch(err => {
            console.log(err);
          });
      }
    });
  };
  handleDelete = key => {
    const dataSource = [...this.state.carmessageslist];

    Axios({
      method: 'post',
      url: 'https://www.fomosmt.cn/car/carInfo/deleteCarInfo',
      data: Qs.stringify({ id: key })
    })
      .then(res => {
        this.setState({
          carmessageslist: dataSource.filter(value => value.key !== key)
        });
      })
      .catch(err => {
        message.error('删除失败');
        console.log(err);
      });
    console.log(key);
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const {
      history: { push }
    } = this.props;
    const columns = [
      {
        title: '车辆ID',
        dataIndex: 'key',
        key: 'key'
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
        title: '车辆类型',
        dataIndex: 'vehicleType',
        key: 'vehicleType'
      },
      {
        title: '底盘信息',
        dataIndex: 'chassiscInformation',
        key: 'chassiscInformation'
      },
      {
        title: '租赁状态',
        dataIndex: 'leaseStatus',
        key: 'leaseStatus'
      },
      {
        title: '操作',
        key: '操作',
        render: (text, record) => (
          <span>
            <a href="javascript:;">查看</a>
            <Divider type="vertical" />
            <a href="javascript:;">编辑</a>
            <Divider type="vertical" />
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => this.handleDelete(record.key)}
            >
              <a href="javascript:;">删除</a>
            </Popconfirm>
          </span>
        )
      }
    ];

    const { carmessageslist } = this.state;
    return (
      <div className="basic-infor-inpuiry" style={{ marginTop: '30px' }}>
        <div
          className="basic-infor-inpuiry-main"
          style={{
            background: '#fff'
          }}
        >
          <div className="basic-infor-inpuiry-main-top">
            <Form layout="inline" onSubmit={this.handleSubmit}>
              <Form.Item label="VIN">
                {getFieldDecorator('VIN', {
                  rules: [{ required: true, message: '请输入VIN！' }]
                })(<Input placeholder="请输入" style={{ width: '200px' }} />)}
              </Form.Item>
              {/* <Form.Item label="状态：">
                {getFieldDecorator('status', {
                  rules: [{ required: true, message: '请选择状态！' }]
                })(
                  <Select
                    placeholder="请选择房车类型"
                    style={{ width: '200px' }}
                  >
                    <Option value="1">空闲</Option>
                    <Option value="2">已租</Option>
                  </Select>
                )}
              </Form.Item> */}
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  查询
                </Button>
              </Form.Item>
            </Form>
            <Button
              type="primary"
              onClick={() => {
                push('/BasicInformationEntry');
              }}
            >
              添加车辆
            </Button>
          </div>
          <div className="basic-infor-inpuiry-main-middle">
            <Table columns={columns} dataSource={carmessageslist} />
          </div>
        </div>
      </div>
    );
  }
}
const BasicInformationInquiryaa = Form.create()(BasicInformationInquiry);
export default BasicInformationInquiryaa;
