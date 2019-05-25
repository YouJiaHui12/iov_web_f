import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import BasicInformationEntry from '../../pages/BasicInformationEntry/BasicInformationEntry';
import BasicInformationInquiry from '../../pages/BasicInformationInquiry/BasicInformationInquiry';
import ElectricalSystem from '../../pages/ElectricalSystem/ElectricalSystem';
import RentalInformation from '../../pages/RentalInformation/RentalInformation';
import UserSecurity from '../../pages/UserSecurity/UserSecurity';
import VehicleStatus from '../../pages/VehicleStatus/VehicleStatus';

const { Header, Content, Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class NavigationBar extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
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
            <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
              <SubMenu
                key='sub1'
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
                <Menu.Item key='VehicleStatus'>
                  <Link to='/VehicleStatus'>车辆状态及行车安全信息</Link>
                </Menu.Item>
                <Menu.Item key='ElectricalSystem'>
                  <Link to='/ElectricalSystem'>电器系统及相关功能性系统</Link>
                </Menu.Item>
                <Menu.Item key='UserSecurity'>
                  <Link to='/UserSecurity'>用户安全及智能控制</Link>
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
                <Route path={'/VehicleStatus'} component={VehicleStatus} />
                <Route
                  path={'/ElectricalSystem'}
                  component={ElectricalSystem}
                />
                <Route path={'/UserSecurity'} component={UserSecurity} />
                <Redirect from='/' to='/BasicInformationInquiry' />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
