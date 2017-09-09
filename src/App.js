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
      data: {}
    };
  }

  render() {
    return (
      <div className="App">
        <Title title={this.state.meta.name} />
        <StyledContentWrapper>
          <WorkTimeContainer />
          <BreakTimeContainer />
          <ResultContainer data={this.state.data} />
        </StyledContentWrapper>
      </div>
    );
  }
}

export default App;
