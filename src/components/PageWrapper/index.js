/**
 * PageWrapper
 */

import React from 'react';

// Styles
import './styles.css';

class PageWrapper extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div className="page-wrapper">
        {children}
      </div>
    );
  }
}

export default PageWrapper;