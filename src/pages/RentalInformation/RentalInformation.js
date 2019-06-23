import React, { Component } from 'react';
import './RentalInformation.css';
// import RentalInformationData from './RentalInformationData';
import { Input, Button, Table, Form } from 'antd';
import Axios from 'axios';

class RentalInformation extends Component {
  constructor() {
    super();
    this.state = {
      rentalmessages: []
    };
  }
  componentWillMount() {
    var timestamp = new Date().valueOf();
    Axios({
      method: 'get',
      url: 'http://www.fomosmt.cn/car/rent/listRentInfo',
      params: { time: timestamp }
    }).then(res => {
      const data = res.data.data;
      console.log(data);
      this.setState({
        rentalmessages: data.rentalmessages
      });
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values.message);
        var timestamp = new Date().valueOf();
        Axios({
          method: 'get',
          url: 'https://www.fomosmt.cn/car/rent/getRentInfoByCondition',
          params: {
            time: timestamp,
            message: values.message,
            id: sessionStorage.getItem('id')
          }
        })
          .then(res => {
            console.log(res.data.data);
            this.setState({
              rentalmessages: res.data.data.carInfos
            });
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        // var timestamp = new Date().valueOf();
        Axios({
          method: 'get',
          url: 'http://www.fomosmt.cn/car/rent/listRentInfo',
          params: { time: timestamp }
        }).then(res => {
          const data = res.data.data;
          console.log(data);
          this.setState({
            rentalmessages: data.rentalmessages
          });
        });
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const {
      history: { push }
    } = this.props;
    const columns = [
      {
        title: '序号',
        render: (text, record, index) => `${index + 1}`
      },
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
      },
      {
        title: '身份证号',
        dataIndex: 'idCard',
        key: 'idCard'
      },
      {
        title: '操作',
        key: '操作',
        render: (text, record) => (
          <span>
            <Button
              size='small'
              style={{ backgroundColor: '#108ee9', color: 'white' }}
              onClick={() =>
                push(`/iovindex/MonitoringIndex/Monitor${record.VIN}`)
              }
            >
              查看更多
            </Button>
          </span>
        )
      }
    ];
    const { rentalmessages } = this.state;
    return (
      <div className='rental-infor' style={{ marginTop: '30px' }}>
        <div style={{ marginTop: '30px', backgroundColor: 'white' }}>
          <div className='rental-infor-top'>
            <Form layout='inline' onSubmit={this.handleSubmit}>
              <Form.Item>
                {getFieldDecorator('message', {
                  rules: [{ required: true, message: '请输入搜索条件！' }]
                })(
                  <Input
                    placeholder='请输入搜索内容'
                    style={{ width: '230px' }}
                  />
                )}
              </Form.Item>

              <Form.Item>
                <Button type='primary' htmlType='submit'>
                  查询
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className='rental-infor-form'>
            <Table
              columns={columns}
              dataSource={rentalmessages}
              rowKey={(record, index) => `${index + 1 + this.state.current}`}
              pagination={{
                pageSize: 6,
                onChange: current => this.changePage(current),
                showTotal: (current, pageSize) =>
                  `从第${pageSize[0]}到${pageSize[1]}条，共${current}条数据。`
              }}
              bordered
            />
          </div>
        </div>
      </div>
    );
  }
}
const RentalInformationaa = Form.create()(RentalInformation);
export default RentalInformationaa;
