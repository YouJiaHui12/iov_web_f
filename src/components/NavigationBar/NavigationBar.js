import React, { Component } from 'react';
import { Menu, Icon, notification } from 'antd';
import { Link, withRouter } from 'react-router-dom';
// import Axios from 'axios';

const SubMenu = Menu.SubMenu;

class NavigationBar extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: false,
      vin: ''
    };
  }
  // componentWillMount() {
  //   setInterval(() => {
  //     var timetimps = new Date().valueOf();
  //     Axios({
  //       method: 'get',
  //       url: 'http://www.fomosmt.cn/car/carInfo/webF/police',
  //       params: { id: 1, time: timetimps }
  //     })
  //       .then(res => {
  //         console.log(res.data.data);
  //         const data = res.data.data;
  //         this.setState({
  //           carname: data.carName,
  //           message: data.message
  //         });
  //         if (JSON.stringify(res.data.data) !== '{}') {
  //           this.openNotificationWithIcon(
  //             'warning',
  //             this.state.carname,
  //             this.state.message
  //           );
  //         }
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   }, 2000);
  // }

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
    const {
      location: { pathname }
    } = this.props;
    console.log([pathname.split('/')[2]]);
    return (
      <div>
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
        <Menu
          theme='dark'
          defaultSelectedKeys={[pathname.split('/')[2]]}
          selectedKeys={[pathname.split('/')[2]]}
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
              <Link to={`/iovindex/BasicInformationInquiry`}>
                车辆基本信息查询
              </Link>
            </Menu.Item>
            <Menu.Item key='BasicInformationEntry'>
              <Link to={`/iovindex/BasicInformationEntry`}>
                车辆基本信息录入
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key='RentalInformation'>
            <Link to={`/iovindex/RentalInformation`}>
              <Icon type='desktop' />
              <span>车辆租赁信息</span>
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default withRouter(NavigationBar);
