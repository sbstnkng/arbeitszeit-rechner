import * as React from 'react';
import { connect } from 'react-redux';
import {
  initializeActionCreator,
  updateArrivalTimeActionCreator,
  updateLeaveTimeActionCreator,
  clearCacheActionCreator
} from './reducer/action';
import styled from 'styled-components';
import {
  Title,
  WorkTimeCard,
  TargetTimeCard,
  ActualTimeCard
} from './components';

const StyledContentWrapper = styled.div`
  padding: 0.5rem;
`;

interface Props {
  time: {
    arrival?: Date;
    leave?: Date;
  };
  targetTime: {
    normal?: Date;
    max?: Date;
  };
  actualTime: {
    time?: Date;
    overtime?: Date;
    isPositive?: boolean;
  };
  onInitialization: () => void;
  onUpdateArrivalTime: () => void;
  onUpdateLeaveTime: () => void;
  onClearStateCache: () => void;
}

export class App extends React.Component<Props, {}> {
  private static readonly TITLE: string = 'Arbeitszeit Rechner';

  constructor(props: Props) {
    super(props);

    this.props.onInitialization();
  }

  render() {
    return (
      <div className="App">
        <Title
          title={App.TITLE}
          onHandleDelete={this.props.onClearStateCache}
        />
        <StyledContentWrapper>
          <WorkTimeCard
            time={this.props.time}
            onArrive={this.props.onUpdateArrivalTime}
            onLeave={this.props.onUpdateLeaveTime}
          />
          <TargetTimeCard targetTime={this.props.targetTime} />
          <ActualTimeCard actualTime={this.props.actualTime} />
        </StyledContentWrapper>
      </div>
    );
  }
}

interface StateForProps {
  time: {};
  targetTime: {};
  actualTime: {};
}

function mapStateToProps(state: StateForProps) {
  return { ...state };
}

function mapDispatchToProps(dispatch: (action: { type: string }) => void) {
  return {
    onInitialization: () => {
      dispatch(initializeActionCreator());
    },
    onUpdateArrivalTime: (event: {}, time: Date) => {
      dispatch(updateArrivalTimeActionCreator(time));
    },
    onUpdateLeaveTime: (event: {}, time: Date) => {
      dispatch(updateLeaveTimeActionCreator(time));
    },
    onClearStateCache: () => {
      dispatch(clearCacheActionCreator());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
