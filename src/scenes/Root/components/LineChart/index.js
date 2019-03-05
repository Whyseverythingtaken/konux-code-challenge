/**
 * LineChart
 */

import React from 'react';
import { connect } from 'react-redux';
import {
  LineChart as LineChartDefault,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line
} from 'recharts';

class LineChart extends React.PureComponent {
  render() {
    const { data } = this.props;
    return (
      <LineChartDefault width={730} height={250} data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="y" stroke="#8884d8" />
      </LineChartDefault>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps)(LineChart);