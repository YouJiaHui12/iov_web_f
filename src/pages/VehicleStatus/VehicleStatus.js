// import React, { Component } from "react";
// import { Divider } from "antd";
// import {
//   Map,
//   Marker,
//   NavigationControl,
//   InfoWindow,
//   MapTypeControl,
//   ScaleControl,
//   OverviewMapControl
// } from "react-bmap";
// import BMap from "BMap";
// export default class VehicleStatus extends Component {
//   constructor() {
//     super();
//     this.state = {
//       address: "", //地图的地址
//       lngLat: [118.05206999999999, 24.60862298561852] //地图的经纬度地址
//     };
//   }
//   componentDidMount() {
//     const that = this;
//     // var map = new BMap.Map("mapContainer"); // 创建Map实例
//     // map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设置中心点坐标和地图级别
//     // map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
//     // map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
//     // map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
//     var lngLat = this.state.lngLat;
//     // var myGeo = new BMap.Geocoder();
//     // var map = new BMap.Map("mapContainer");
//     // // 根据坐标得到地址描述
//     // myGeo.getLocation(new BMap.Point(lngLat[0], lngLat[1]), function(result) {
//     //   that.setState({
//     //     address: result.address
//     //   });
//     // });
//     // //获取起点终点的位置
//     // var myP1 = new BMap.Point(lngLat[0], lngLat[1]); //起点-重庆
//     // var myP2 = new BMap.Point(108.983569, 34.285675); //终点-西安
//     // var myP3 = new BMap.Point(116.404449, 39.920423); //终点-北京
//     // var driving = new BMap.DrivingRoute(map); //创建驾车实例
//     // map.clearOverlays();
//     // driving.search(myP1, myP2); //第一个驾车搜索
//     // driving.search(myP2, myP3);

//     const { BMap } = window;
//     var map = new BMap.Map("allmap"); // 创建Map实例
//     var p3 = new BMap.Point(118.155103, 24.51722399999999);
//     map.centerAndZoom(new BMap.Point(lngLat[0], lngLat[1]), 11); // 初始化地图,设置中心点坐标和地图级别
//     map.addControl(new BMap.MapTypeControl());
//     map.addControl(new BMap.NavigationControl());
//     map.addControl(new BMap.Marker(p3));
//     var p1 = new BMap.Point(lngLat[0], lngLat[1]);
//     var p2 = new BMap.Point(118.06715, 24.44464);
//     var p3 = new BMap.Point(118.155103, 24.51722399999999);
//     var driving = new BMap.DrivingRoute(map, {
//       renderOptions: { map: map, autoViewport: true }
//     });
//     driving.search(p1, p2);
//     map.addOverlay(p3);
//     var infoWindow = new BMap.InfoWindow(<div style={{ width: "50px", height: "50px" }}>sss</div>); // 创建信息窗口对象
//     map.openInfoWindow(infoWindow,p3);
//   }
//   render() {
//     let lngLat = this.state.lngLat;
//     return (
//       <div
//         className="vehicle-status-main"
//         style={{ backgroundColor: "white", marginTop: "30px" }}
//       >
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-around",
//             paddingTop: "20px",
//             alignItems: "flex-start"
//           }}
//         >
//           <div className="vehicle-status-map" style={{ width: "500px" }}>
//             <div
//               className="mapContainer"
//               id="allmap"
//               style={{ width: "500px", height: "500px" }}
//             />
//           </div>
//           <div
//             style={{
//               fontSize: "24px",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "space-between",
//               height: "250px"
//             }}
//           >
//             <div>
//               车牌：<span>闽Dxxxxx</span>
//             </div>
//             <div>
//               车速：<span>60km/h</span>
//             </div>
//             <div>
//               车辆当前位置：<span>厦门大云房车</span>
//             </div>
//           </div>
//         </div>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-around"
//           }}
//         >
//           <div style={{ fontSize: "24px" }}>
//             <div style={{ fontWeight: "bold" }}>胎压监测</div>
//             <Divider />
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 width: "500px"
//               }}
//             >
//               <div>
//                 <div
//                   style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center"
//                   }}
//                 >
//                   <div>左前胎</div>
//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: "space-between",
//                       width: "100px"
//                     }}
//                   >
//                     <span>26</span>
//                     <span>2.6</span>
//                   </div>
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center"
//                   }}
//                 >
//                   <div>左后胎</div>
//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: "space-between",
//                       width: "100px"
//                     }}
//                   >
//                     <span>26</span>
//                     <span>2.6</span>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div>图</div>
//               </div>
//               <div>
//                 <div
//                   style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center"
//                   }}
//                 >
//                   <div>右前胎</div>
//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: "space-between",
//                       width: "100px"
//                     }}
//                   >
//                     <span>26</span>
//                     <span>2.6</span>
//                   </div>
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center"
//                   }}
//                 >
//                   <div>右后胎</div>
//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: "space-between",
//                       width: "100px"
//                     }}
//                   >
//                     <span>26</span>
//                     <span>2.6</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div style={{ fontSize: "24px" }}>
//             <div style={{ fontWeight: "bold" }}>三轴姿态</div>
//             <Divider />
//             <div>
//               航向角<span>90°</span>
//             </div>
//             <div>
//               横摆角<span>90°</span>
//             </div>
//             <div>
//               质心侧偏角<span>90°</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
