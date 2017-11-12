import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider } from 'material-ui/styles';
import App from './App';
import 'sanitize.css';
import './index.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const AppContainer = () => {
  return (
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  );
};

ReactDOM.render(<AppContainer />, document.getElementById(
  'root'
) as HTMLElement);
registerServiceWorker();
