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
  ActualTimeCard,
  BreakTimeCard
} from './components';
import { AppData, ActionType } from './types';

const StyledContentWrapper = styled.div`
  padding: 0.5rem;
`;

interface Props extends AppData {
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
          <BreakTimeCard />
          <TargetTimeCard targetTime={this.props.targetTime} />
          <ActualTimeCard actualTime={this.props.actualTime} />
        </StyledContentWrapper>
      </div>
    );
  }
}

function mapStateToProps(state: AppData) {
  return { ...state };
}

function mapDispatchToProps(dispatch: (action: ActionType) => void) {
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
