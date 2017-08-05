import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'sanitize.css';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const AppContainer = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(<AppContainer />, document.getElementById('root'));
registerServiceWorker();
