/**
 * LoadingGate
 */

import React from 'react';
import { connect } from 'react-redux';
import { Loader } from 'semantic-ui-react';

class LoadingGate extends React.PureComponent {
  render() {
    const { children, loading } = this.props;
    if (loading) {
      return <Loader active />;
    }

    return children;
  }
}

const mapStateToProps = state => ({
  loading: state.loading
});

export default connect(mapStateToProps)(LoadingGate);