import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import { Layout, Button, Spin } from 'antd';
import BasicInformationEntry from '../pages/BasicInformationEntry/BasicInformationEntry';
// import BasicInformationInquiry from '../pages/BasicInformationInquiry/BasicInformationInquiry';
import RentalInformation from '../pages/RentalInformation/RentalInformation';
import MonitoringIndex from '../pages/MonitoringIndex/MonitoringIndex';
import BasicInformationInquiryIndex from './messageindex';
const { Header, Content, Sider } = Layout;
export default class iovindex extends Component {
  constructor() {
    super();
    this.state = {
      pageStatus: false,
      collapsed: false,
      vin: '',
      key: ['BasicInformationInquiry']
    };
  }
  componentWillMount() {
    if (sessionStorage.getItem('id') != undefined) {
      this.setState({
        pageStatus: true
      });
    }
  }
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  handleReset = () => {
    this.props.history.push('/login');
    sessionStorage.clear();
  };
  render() {
    const {
      match: { url }
    } = this.props;
    const { pageStatus } = this.state;
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            width={280}
          >
            <NavigationBar />
          </Sider>
          <Layout>
            <Header
              style={{
                background: '#fff',
                padding: '0 0 0 18px',
                fontSize: '17px'
              }}
            >
              {sessionStorage.getItem('id') != undefined ? (
                <div>
                  <span>{`欢迎您，${sessionStorage.getItem(
                    'userName'
                  )}！`}</span>
                  <Button size='small' type='dashed' onClick={this.handleReset}>
                    注销
                  </Button>
                </div>
              ) : (
                <div>
                  <span>您还未登录！</span>
                  <Button size='small' type='dashed' onClick={this.handleReset}>
                    登录
                  </Button>
                </div>
              )}
            </Header>
            <Content style={{ margin: '0 16px' }}>
              {pageStatus === false ? (
                <div
                  className='loading'
                  style={{
                    textAlign: 'center',
                    background: 'rgba(0, 0, 0, 0.05)',
                    minHeight: '635px',
                    padding: '280px 50px'
                  }}
                >
                  <Spin size='large' />
                </div>
              ) : (
                <Switch>
                  <Route
                    path={`${url}/BasicInformationInquiry`}
                    component={BasicInformationInquiryIndex}
                  />
                  <Route
                    path={`${url}/BasicInformationEntry`}
                    component={BasicInformationEntry}
                  />
                  <Route
                    path={`${url}/RentalInformation`}
                    component={RentalInformation}
                  />
                  <Route
                    path={`${url}/MonitoringIndex/:vin`}
                    component={MonitoringIndex}
                  />
                  <Redirect
                    from={`${url}`}
                    to={`${url}/BasicInformationInquiry`}
                  />
                </Switch>
              )}
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}
