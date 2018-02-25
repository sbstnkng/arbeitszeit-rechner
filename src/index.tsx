import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore } from 'redux';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider } from 'material-ui/styles';
import App from './App';
import rootReducer from './reducer/reducer';
import 'sanitize.css';
import './index.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = createStore(rootReducer);

const AppContainer = () => {
  return (
    <MuiThemeProvider>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </MuiThemeProvider>
  );
};

ReactDOM.render(<AppContainer />, document.getElementById(
  'root'
) as HTMLElement);
registerServiceWorker();
