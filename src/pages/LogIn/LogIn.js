import React, { Component } from 'react';
import './LogIn.css';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import Axios from 'axios';
import Qs from 'qs';

class LogIn extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        Axios({
          method: 'post',
          url: 'https://www.fomosmt.cn/car/userF/login',
          data: Qs.stringify({
            userName: values.userName,
            password: parseInt(values.password)
          })
        })
          .then(res => {
            console.log(res.data.data.username);
            sessionStorage.setItem('id', res.data.data.id);
            sessionStorage.setItem('userName', res.data.data.username);
            this.props.history.push('/iovindex');
          })
          .catch(err => {
            message.error('失败');
            console.log(err);
          });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='login-form-area'>
        <div className='login-title'>登录页面</div>
        <Form onSubmit={this.handleSubmit} className='login-form'>
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入用户名!' }]
            })(
              <Input
                prefix={
                  <Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder='用户名'
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }]
            })(
              <Input
                prefix={
                  <Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type='password'
                placeholder='密码'
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true
            })(<Checkbox>记住密码</Checkbox>)}
            <div className='login-form-forgot'>忘记密码</div>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button'
            >
              登录
            </Button>
            <div style={{ color: '#0087ff' }}>去注册</div>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(LogIn);
export default WrappedNormalLoginForm;
