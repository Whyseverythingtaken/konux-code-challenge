/**
 * Root
 */

import React from 'react';

// Components
import LineChart from './components/LineChart';
import AddPointForm from './components/AddPointForm';
import PageWrapper from '../../components/PageWrapper';
import LoadingGate from '../../components/LoadingGate';

class Root extends React.PureComponent {
  render() {
    return (
      <PageWrapper>
        <AddPointForm />
        <br />
        <LoadingGate>
          <LineChart />
        </LoadingGate>
      </PageWrapper>
    );
  }
}

export default Root;