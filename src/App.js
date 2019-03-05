import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

// Components
import RequestData from './components/RequestData';
import Navigation from './components/Navigation';

// Scenes

// Store
import { store } from './store';

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <RequestData />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
