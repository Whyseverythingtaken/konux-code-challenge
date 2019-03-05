/**
 * RequestData
 */

import React from 'react';
import { connect } from 'react-redux';

// Actions
import { requestData } from '../../services/data/actions';

class RequestData extends React.PureComponent{
  componentDidMount() {
    const { limit } = this.props;
    this.props.requestData(limit);
  }

  componentDidUpdate(prevProps) {
    if (this.props.limit !== prevProps.limit) {
      const { limit } = this.props;
      this.props.requestData(limit);
    }
  }

  render() {
    return null;
  }
}

const mapStateToProps = state => ({
  limit: state.limit
});

export default connect(mapStateToProps, { requestData })(RequestData);