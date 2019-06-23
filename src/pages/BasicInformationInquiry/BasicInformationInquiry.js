import React, { Component } from 'react';
import './BasicInformationInquiry.css';
import { Input, Button, Table, Form, Popconfirm, message } from 'antd';
import Axios from 'axios';
import Qs from 'qs';

class BasicInformationInquiry extends Component {
  constructor() {
    super();
    this.state = {
      carmessageslist: [],
      current: 0
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
        console.log('Received values of form: ', values.message);
        if (
          values.message === '空' ||
          values.message === '闲' ||
          values.message === '空闲'
        ) {
          values.message = 'true';
        }
        var timestamp = new Date().valueOf();
        Axios({
          method: 'get',
          url: 'https://www.fomosmt.cn/car/carInfo/getCarInfoByCondition',
          params: {
            time: timestamp,
            message: values.message,
            id: sessionStorage.getItem('id')
          }
        })
          .then(res => {
            console.log(res.data.data);
            this.setState({
              carmessageslist: res.data.data.carInfos
            });
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        // var timestamp = new Date().valueOf();
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
    });
  };
  handleDelete = key => {
    console.log(key, 'ssssssssssss');
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

  changePage(e) {
    console.log((e - 1) * 6);
    this.setState({
      current: (e - 1) * 6
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const {
      history: { push }
    } = this.props;
    const columns = [
      {
        title: '序号',
        render: (text, record, index) => `${index + 1 + this.state.current}`,
        key: 'Index'
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
            <Button
              size='small'
              style={{ backgroundColor: '#108ee9', color: 'white' }}
              onClick={() => push(`detail/Monitor${record.VIN}`)}
            >
              查看更多
            </Button>
            <Popconfirm
              title='确定删除吗?'
              okText='确定'
              cancelText='取消'
              onConfirm={() => this.handleDelete(record.key)}
            >
              <Button
                size='small'
                style={{ backgroundColor: '#f50', color: 'white' }}
                href=''
              >
                删除
              </Button>
            </Popconfirm>
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
          <div className='basic-infor-inpuiry-main-top'>
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
            <Button
              type='primary'
              onClick={() => {
                push('/iovindex/BasicInformationEntry');
              }}
            >
              添加车辆
            </Button>
          </div>
          <div className='basic-infor-inpuiry-main-middle'>
            <Table
              columns={columns}
              dataSource={carmessageslist}
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
const BasicInformationInquiryaa = Form.create()(BasicInformationInquiry);
export default BasicInformationInquiryaa;
