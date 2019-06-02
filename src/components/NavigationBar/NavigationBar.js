import React, { Component } from 'react';
import { Layout, Menu, Icon, notification, Modal, message } from 'antd';
import { Link, Switch, Route, Redirect, withRouter } from 'react-router-dom';
import BasicInformationEntry from '../../pages/BasicInformationEntry/BasicInformationEntry';
import BasicInformationInquiry from '../../pages/BasicInformationInquiry/BasicInformationInquiry';
import ElectricalSystem from '../../pages/ElectricalSystem/ElectricalSystem';
import RentalInformation from '../../pages/RentalInformation/RentalInformation';
import UserSecurity from '../../pages/UserSecurity/UserSecurity';
import VehicleStatus from '../../pages/VehicleStatus/VehicleStatus';
import Axios from 'axios';

const { Header, Content, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class NavigationBar extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: false,
      visible: false,
      vin: '',
      key: ['BasicInformationInquiry']
    };
  }
  componentWillMount() {
    setInterval(() => {
      var timetimps = new Date().valueOf();
      Axios({
        method: 'get',
        url: 'http://www.fomosmt.cn/car/carInfo/webF/police',
        params: { id: 1, time: timetimps }
      })
        .then(res => {
          console.log(res.data.data);
          const data = res.data.data;
          this.setState({
            carname: data.carName,
            message: data.message
          });
          if (JSON.stringify(res.data.data) !== '{}') {
            this.openNotificationWithIcon(
              'warning',
              this.state.carname,
              this.state.message
            );
          }
        })
        .catch(err => {
          console.log(err);
        });
    }, 2000);
  }

  showModal = key => {
    this.setState({
      visible: true,
      key: key
    });
    console.log(this.state.key);
  };
  //弹窗内容变化
  onClickSearch = e => {
    this.setState({
      vin: e.target.value
    });
  };
  //确认对话框
  handleOk = () => {
    console.log(this.state.vin);
    if (this.state.vin == 1) {
      this.props.history.push(`/${this.state.key}/${this.state.vin}`);
      this.setState({
        visible: false,
        vin: ''
      });
    } else {
      message.error('请输入正确的vin!');
    }
  };
  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  // onClick(e){
  // this.props.history.go()
  // }
  openNotificationWithIcon = (type, carname, message) => {
    notification[type]({
      message: carname,
      description: message
    });
  };

  render() {
    return (
      <div>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            width={280}
          >
            <div
              className='logo'
              style={{
                fontSize: '24px',
                color: 'white',
                textAlign: 'center',
                margin: '12px'
              }}
            >
              车联网监测系统
            </div>
            <Modal
              title='请输入车辆VIN:'
              visible={this.state.visible}
              okText={'确定'}
              onOk={this.handleOk}
              cancelText={'取消'}
              onCancel={this.handleCancel}
            >
              <input
                size='large'
                style={{ width: '315px', height: '38px' }}
                onChange={this.onClickSearch}
                value={this.state.vin}
              />
            </Modal>
            <Menu
              theme='dark'
              defaultSelectedKeys={['BasicInformationInquiry']}
              mode='inline'
            >
              <SubMenu
                key='1'
                title={
                  <span>
                    <Icon type='pie-chart' />
                    <span>车辆基本信息</span>
                  </span>
                }
              >
                <Menu.Item key='BasicInformationInquiry'>
                  <Link to='/BasicInformationInquiry'>车辆基本信息查询</Link>
                </Menu.Item>
                <Menu.Item key='BasicInformationEntry'>
                  <Link to='/BasicInformationEntry'>车辆基本信息录入</Link>
                </Menu.Item>
              </SubMenu>
              <Menu.Item key='RentalInformation'>
                <Link to='/RentalInformation'>
                  <Icon type='desktop' />
                  <span>车辆租赁信息</span>
                </Link>
              </Menu.Item>
              <SubMenu
                key='sub2'
                title={
                  <span>
                    <Icon type='file' />
                    <span>车辆监测信息</span>
                  </span>
                }
              >
                <Menu.Item
                  key='VehicleStatus'
                  onClick={() => this.showModal('VehicleStatus')}
                >
                  车辆状态及行车安全信息
                </Menu.Item>
                <Menu.Item
                  key='ElectricalSystem'
                  onClick={() => this.showModal('ElectricalSystem')}
                >
                  电器系统及相关功能性系统
                </Menu.Item>
                <Menu.Item
                  key='UserSecurity'
                  onClick={() => this.showModal('UserSecurity')}
                >
                  用户安全及智能控制
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              <Switch>
                <Route
                  path={'/BasicInformationInquiry'}
                  component={BasicInformationInquiry}
                />
                <Route
                  path={'/BasicInformationEntry'}
                  component={BasicInformationEntry}
                />
                <Route
                  path={'/RentalInformation'}
                  component={RentalInformation}
                />
                <Route path={'/VehicleStatus/:vin'} component={VehicleStatus} />
                <Route
                  path={'/ElectricalSystem/:vin'}
                  component={ElectricalSystem}
                />
                <Route path={'/UserSecurity/:vin'} component={UserSecurity} />
                <Redirect from='/' to='/BasicInformationInquiry' />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default withRouter(NavigationBar);
