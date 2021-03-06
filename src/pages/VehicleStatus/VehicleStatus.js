import React, { Component } from 'react';
import './VehicleStatus.css';
import axios from 'axios';

export default class VehicleStatus extends Component {
  constructor() {
    super();
    this.state = {
      licensePlate: '',
      speed: '',
      currentPosition: '',
      leftFrontTire: {},
      rightFrontTire: {},
      leftRearTire: {},
      rightRearTire: {},
      triaxialAttitude: {},
      point: {
        endPoint: [118.059395, 24.612685],
        nowPoint: [118.082033, 24.630538],
        startingPoint: [118.073467, 24.450968]
      } //地理位置
    };
  }
  //加载前调用
  componentWillMount() {
    // console.log(this.props.match.params.vin)
    this.getMapPoint(1);
    axios({
      method: 'get',
      url: 'https://www.fomosmt.cn/car/carStatus/getCarStatusAndSafe',
      data: { vin: this.props.vin }
    }).then(res => {
      const data = res.data.data;
      this.setState({
        licensePlate: data.licensePlate,
        speed: data.speed,
        currentPosition: data.currentPosition,
        leftFrontTire: data.tirePressureMonitoring.leftFrontTire,
        rightFrontTire: data.tirePressureMonitoring.rightFrontTire,
        leftRearTire: data.tirePressureMonitoring.leftRearTire,
        rightRearTire: data.tirePressureMonitoring.rightRearTire,
        triaxialAttitude: data.triaxialAttitude
      });
    });
  }
  //将point注入后调用
  // componentDidUpdate() {
  //   this.establishMap(this.state.point);
  // }
  //获取地图地址
  getMapPoint(e) {
    const that = this;
    var timetimps = new Date().valueOf();
    axios
      .request('https://www.fomosmt.cn/car/car/getMapInfo', {
        params: {
          carId: e,
          time: timetimps
        }
      })
      .then(function(response) {
        console.log(response.data.data);
        let res = response.data.data;
        res.endPoint[0] = parseFloat(res.endPoint[0]);
        res.endPoint[1] = parseFloat(res.endPoint[1]);
        res.nowPoint[0] = parseFloat(res.nowPoint[0]);
        res.nowPoint[1] = parseFloat(res.nowPoint[1]);
        res.startingPoint[0] = parseFloat(res.startingPoint[0]);
        res.startingPoint[1] = parseFloat(res.startingPoint[1]);
        that.establishMap(res);
      });
  }
  //创建地图信息
  establishMap(e) {
    console.log('eeeee', e.startingPoint[0]);
    const { BMap } = window; //创建地图
    var map = new BMap.Map('allmap'); // 创建Map实例
    var nowPoint = new BMap.Point(e.nowPoint[0], e.nowPoint[1]); //地图当前位置
    map.centerAndZoom(new BMap.Point(e.nowPoint[0], e.nowPoint[1]), 11); // 初始化地图,设置中心点坐标和地图级别
    map.addControl(new BMap.MapTypeControl()); //地图三维设置
    map.addControl(new BMap.NavigationControl()); //地图侧边放大缩小
    map.addControl(new BMap.Marker(nowPoint)); //地图地理位置显示
    var startingPoint = new BMap.Point(e.startingPoint[0], e.startingPoint[1]); //地图起点
    var endPoint = new BMap.Point(e.endPoint[0], e.endPoint[1]); //地图终点
    var driving = new BMap.DrivingRoute(map, {
      renderOptions: { map: map, autoViewport: true }
    }); //驾车实例,路线
    driving.search(startingPoint, endPoint);
    map.addOverlay(nowPoint);
    var infoWindow = new BMap.InfoWindow( //创建信息窗,失败
      <div style={{ width: '50px', height: '50px' }}>sss</div>
    ); // 创建信息窗口对象
    map.openInfoWindow(infoWindow, nowPoint); //信息窗,失败
  }
  render() {
    const {
      licensePlate,
      speed,
      currentPosition,
      leftFrontTire,
      rightFrontTire,
      leftRearTire,
      rightRearTire,
      triaxialAttitude
    } = this.state;
    return (
      <div className='vehicle-status-main'>
        <div
          style={{
            display: 'flex',
            paddingTop: '20px',
            alignItems: 'flex-start',
            paddingLeft: '30px'
          }}
        >
          <div className='vehicle-status-map' style={{ width: '500px' }}>
            <div
              className='mapContainer'
              id='allmap'
              style={{ width: '500px', height: '500px' }}
            />
          </div>

          <div className='vehicle-status-right'>
            <div className='vehicle-status-right-top'>
              <div>
                车牌：<span>{licensePlate}</span>
              </div>
              <div>
                车速：<span>{`${speed}km/h`}</span>
              </div>
              <div>
                车辆当前位置：<span>{currentPosition}</span>
              </div>
            </div>
            <div className='vehicle-status-right-bottom'>
              <div style={{ fontSize: '24px' }}>
                <div style={{ fontWeight: 'bold' }}>胎压监测</div>
                <div className='tire-pressure-monitoring'>
                  <div>
                    <div className='tire-pressure-main'>
                      <div>左前胎</div>
                      <div className='tire-pressure-data'>
                        <span>{`${leftFrontTire.Threshold}`}</span>
                        <span>{`${leftFrontTire.currentValue}`}</span>
                      </div>
                    </div>
                    <div className='tire-pressure-main'>
                      <div>左后胎</div>
                      <div className='tire-pressure-data'>
                        <span>{`${leftRearTire.Threshold}`}</span>
                        <span>{`${leftRearTire.currentValue}`}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>图</div>
                  </div>
                  <div>
                    <div className='tire-pressure-main'>
                      <div>右前胎</div>
                      <div className='tire-pressure-data'>
                        <span>{`${rightFrontTire.Threshold}`}</span>
                        <span>{`${rightFrontTire.currentValue}`}</span>
                      </div>
                    </div>
                    <div className='tire-pressure-main'>
                      <div>右后胎</div>
                      <div className='tire-pressure-data'>
                        <span>{`${rightRearTire.Threshold}`}</span>
                        <span>{`${rightRearTire.currentValue}`}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='triaxial-attitude'>
                <div style={{ fontWeight: 'bold' }}>三轴姿态</div>
                <div>
                  航向角<span>{`${triaxialAttitude.heading}°`}</span>
                </div>
                <div>
                  横摆角<span>{`${triaxialAttitude.yawAngle}°`}</span>
                </div>
                <div>
                  质心侧偏角
                  <span>{`${triaxialAttitude.centroidSideAngle}°`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
