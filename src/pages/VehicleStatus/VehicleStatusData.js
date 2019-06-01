const VehicleStatusData = {
  data: {
    licensePlate: '闽Dxxxx',
    speed: 60,
    currentPosition: '厦门大云房车',
    tirePressureMonitoring: {
      leftFrontTire: {
        Threshold: 26,
        currentValue: 2.6
      },
      rightFrontTire: {
        Threshold: 26,
        currentValue: 2.6
      },
      leftRearTire: {
        Threshold: 26,
        currentValue: 2.6
      },
      rightRearTire: {
        Threshold: 26,
        currentValue: 2.6
      }
    },
    triaxialAttitude: {
      heading: 90,
      yawAngle: 90,
      centroidSideAngle: 90
    }
  }
};

export default VehicleStatusData;
