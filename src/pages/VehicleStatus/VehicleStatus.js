import React, { Component } from 'react';
import { Divider } from 'antd';
import { Map, Marker, NavigationControl, InfoWindow } from 'react-bmap';
export default class VehicleStatus extends Component {
  render() {
    return (
      <div
        className='vehicle-status-main'
        style={{ backgroundColor: 'white', marginTop: '30px' }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            paddingTop: '20px',
            alignItems: 'flex-start'
          }}
        >
          <div className='vehicle-status-map' style={{ width: '500px' }}>
            <Map center={{ lng: 116.402544, lat: 39.928216 }} zoom='11'>
              <Marker position={{ lng: 116.402544, lat: 39.928216 }} />
              <NavigationControl />
              <InfoWindow
                position={{ lng: 116.402544, lat: 39.928216 }}
                text='内容'
                title='标题'
              />
            </Map>
          </div>
          <div
            style={{
              fontSize: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '250px'
            }}
          >
            <div>
              车牌：<span>闽Dxxxxx</span>
            </div>
            <div>
              车速：<span>60km/h</span>
            </div>
            <div>
              车辆当前位置：<span>厦门大云房车</span>
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <div style={{ fontSize: '24px' }}>
            <div style={{ fontWeight: 'bold' }}>胎压监测</div>
            <Divider />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '500px'
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}
                >
                  <div>左前胎</div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      width: '100px'
                    }}
                  >
                    <span>26</span>
                    <span>2.6</span>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}
                >
                  <div>左后胎</div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      width: '100px'
                    }}
                  >
                    <span>26</span>
                    <span>2.6</span>
                  </div>
                </div>
              </div>
              <div>
                <div>图</div>
              </div>
              <div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}
                >
                  <div>右前胎</div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      width: '100px'
                    }}
                  >
                    <span>26</span>
                    <span>2.6</span>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}
                >
                  <div>右后胎</div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      width: '100px'
                    }}
                  >
                    <span>26</span>
                    <span>2.6</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ fontSize: '24px' }}>
            <div style={{ fontWeight: 'bold' }}>三轴姿态</div>
            <Divider />
            <div>
              航向角<span>90°</span>
            </div>
            <div>
              横摆角<span>90°</span>
            </div>
            <div>
              质心侧偏角<span>90°</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
