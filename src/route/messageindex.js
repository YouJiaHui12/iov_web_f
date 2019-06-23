import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import BasicInformationInquiryaa from '../pages/BasicInformationInquiry/BasicInformationInquiry';
import MonitoringIndex from '../pages/MonitoringIndex/MonitoringIndex';
export default class messageindex extends Component {
  render() {
    const {
      match: { url }
    } = this.props;
    return (
      <Switch>
        <Route path={`${url}/message`} component={BasicInformationInquiryaa} />
        <Route path={`${url}/detail/:vin`} component={MonitoringIndex} />
        <Redirect from={`${url}`} to={`${url}/message`} />
      </Switch>
    );
  }
}
