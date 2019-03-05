import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

// Components
import RequestData from './components/RequestData';

// Scenes
import Root from './scenes/Root';

// Store
import { store } from './store';

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <RequestData />
            <Switch>
              <Route exact path="/" component={Root} />
              <Redirect from="/*" to="/" />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
