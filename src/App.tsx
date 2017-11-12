import * as React from 'react';
import { connect } from 'react-redux';
import {
  updateArrivalTimeActionCreator,
  updateLeaveTimeActionCreator
} from './reducer/action';
import styled from 'styled-components';
import { Title, WorkTimeCard } from './components';

const StyledContentWrapper = styled.div`
  padding: 0.5rem;
`;

interface Props {
  time: {
    arrival?: Date;
    leave?: Date;
  };
  onUpdateArrivalTime: () => void;
  onUpdateLeaveTime: () => void;
}

export class App extends React.Component<Props, {}> {
  private static readonly TITLE: string = 'Arbeitszeit Rechner';

  render() {
    return (
      <div className="App">
        <Title title={App.TITLE} />
        <StyledContentWrapper>
          <WorkTimeCard
            time={this.props.time}
            onArrive={this.props.onUpdateArrivalTime}
            onLeave={this.props.onUpdateLeaveTime}
          />
        </StyledContentWrapper>
      </div>
    );
  }
}

function mapStateToProps(state: { time: {} }) {
  return { ...state };
}

function mapDispatchToProps(dispatch: (action: { type: string }) => void) {
  return {
    onUpdateArrivalTime: (event: {}, time: Date) => {
      dispatch(updateArrivalTimeActionCreator(time));
    },
    onUpdateLeaveTime: (event: {}, time: Date) => {
      dispatch(updateLeaveTimeActionCreator(time));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
