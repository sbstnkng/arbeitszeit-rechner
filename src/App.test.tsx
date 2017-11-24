import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import { App } from './App';

describe('App', () => {
  let time: {};
  let targetTime: {};
  let actualTime: Date | undefined;
  let onInitialization: () => void;
  let onUpdateArrivalTime: () => void;
  let onUpdateLeaveTime: () => void;
  let onClearStateCache: () => void;

  beforeEach(() => {
    time = {
      arrival: undefined,
      leave: undefined
    };
    targetTime = {
      normal: undefined,
      max: undefined
    };
    actualTime = undefined;
    onInitialization = jest.fn();
    onUpdateArrivalTime = jest.fn();
    onUpdateLeaveTime = jest.fn();
    onClearStateCache = jest.fn();
  });

  it('renders without crashing', () => {
    injectTapEventPlugin();

    const AppContainer = () => {
      return (
        <MuiThemeProvider>
          <App
            time={time}
            targetTime={targetTime}
            actualTime={actualTime}
            onInitialization={onInitialization}
            onUpdateArrivalTime={onUpdateArrivalTime}
            onUpdateLeaveTime={onUpdateLeaveTime}
            onClearStateCache={onClearStateCache}
          />
        </MuiThemeProvider>
      );
    };

    const div = document.createElement('div');
    ReactDOM.render(<AppContainer />, div);
  });
});
