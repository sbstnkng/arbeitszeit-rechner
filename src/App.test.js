import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App';

it('renders without crashing', () => {
  injectTapEventPlugin();

  const AppContainer = () =>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>;

  const div = document.createElement('div');
  ReactDOM.render(<AppContainer />, div);
});
