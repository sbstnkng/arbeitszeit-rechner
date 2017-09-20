import React, { Component } from 'react';
import styled from 'styled-components';
import Title from './components/Title';
import WorkTimeContainer from './components/WorkTimeContainer';
import BreakTimeContainer from './components/BreakTimeContainer';
import ResultContainer from './components/ResultContainer';

const StyledContentWrapper = styled.div`padding: 0.5rem;`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meta: {
        name: 'Arbeitszeit Rechner'
      },
      time: {
        start: null,
        end: null
      }
    };
    this.updateTime = this.updateTime.bind(this);
  }

  updateTime(start, end) {
    const startTime = start !== null ? start : this.state.time.start;
    const endTime = end !== null ? end : this.state.time.end;
    this.setState({
      time: {
        start: startTime,
        end: endTime
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Title title={this.state.meta.name} />
        <StyledContentWrapper>
          <WorkTimeContainer update={this.updateTime} />
          <BreakTimeContainer />
          <ResultContainer time={this.state.time} />
        </StyledContentWrapper>
      </div>
    );
  }
}

export default App;
