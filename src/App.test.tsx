import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App';

it('renders without crashing', () => {
  injectTapEventPlugin();

  const AppContainer = () => {
    return (
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    );
  };

  const div = document.createElement('div');
  ReactDOM.render(<AppContainer />, div);
});
