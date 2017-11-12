import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import { App } from './App';

describe('App', () => {
  let time: {};
  let onInitialization: () => void;
  let onUpdateArrivalTime: () => void;
  let onUpdateLeaveTime: () => void;

  beforeEach(() => {
    time = {
      arrival: undefined,
      leave: undefined
    };
    onInitialization = jest.fn();
    onUpdateArrivalTime = jest.fn();
    onUpdateLeaveTime = jest.fn();
  });

  it('renders without crashing', () => {
    injectTapEventPlugin();

    const AppContainer = () => {
      return (
        <MuiThemeProvider>
          <App
            time={time}
            onInitialization={onInitialization}
            onUpdateArrivalTime={onUpdateArrivalTime}
            onUpdateLeaveTime={onUpdateLeaveTime}
          />
        </MuiThemeProvider>
      );
    };

    const div = document.createElement('div');
    ReactDOM.render(<AppContainer />, div);
  });
});
