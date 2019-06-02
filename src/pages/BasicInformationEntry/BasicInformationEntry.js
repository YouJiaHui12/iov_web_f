import React, { Component } from 'react';
import './BasicInformationEntry.css';
import { Form, Input, Select, Button, message } from 'antd';

import Axios from 'axios';
import Qs from 'qs';
const { Option } = Select;

class BasicInformationEntry extends Component {
  constructor() {
    super();
    this.state = {
      RVType: []
    };
  }
  componentWillMount() {
    Axios({
      method: 'get',
      url: 'http://www.fomosmt.cn/car/carType/getAllCarType'
    }).then(res => {
      const data = res.data.data;
      console.log(data);
      this.setState({
        RVType: data.rvType
      });
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const {
      history: { push }
    } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { carVin, brand, licensePlate, chassisInfo, id } = values;
        Axios({
          method: 'post',
          url: 'https://www.fomosmt.cn/car/carInfo/addCarInfo',
          data: Qs.stringify({
            carVin: carVin,
            brand: brand,
            licentsePlate: licensePlate,
            chassisInfo: chassisInfo,
            'car.carType': id
          })
        })
          .then(res => {
            console.log(res.data);
            if (res.data.statusCode == 200) {
              push('/BasicInformationInquiry');
            } else {
              message.error(res.data.message);
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    });
  };
  handleResetClick = e => {
    this.props.form.resetFields();
  };

  render() {
    const { RVType } = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <div className='infor-entry'>车辆基本信息录入</div>
        <Form
          onSubmit={this.handleSubmit}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          style={{ marginTop: '36px' }}
        >
          <Form.Item label='VIN' hasFeedback>
            {getFieldDecorator('carVin', {
              rules: [
                {
                  required: true,
                  message: '请输入VIN'
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label='品牌' hasFeedback>
            {getFieldDecorator('brand', {
              rules: [
                {
                  required: true,
                  message: '请输入品牌'
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label='车牌' hasFeedback>
            {getFieldDecorator('licensePlate', {
              rules: [
                {
                  required: true,
                  message: '请输入车牌'
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label='底盘信息' hasFeedback>
            {getFieldDecorator('chassisInfo', {
              rules: [
                {
                  required: true,
                  message: '请输入底盘信息'
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label='房车类型' hasFeedback>
            {getFieldDecorator('id', {
              rules: [{ required: true, message: '请选择房车类型' }]
            })(
              <Select placeholder='请选择房车类型'>
                {RVType.map((value, index) => {
                  return (
                    <Option key={index} value={value.RVTypeName}>
                      {value.RVTypeName}
                    </Option>
                  );
                })}
              </Select>
            )}
          </Form.Item>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginRight: '50px'
            }}
          >
            <Form.Item>
              <Button type='primary' htmlType='submit'>
                提交
              </Button>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 5 }}>
              <Button type='primary' onClick={this.handleResetClick}>
                重置
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    );
  }
}
const BasicInformationEntryaa = Form.create()(BasicInformationEntry);
export default BasicInformationEntryaa;
