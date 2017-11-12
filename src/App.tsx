import * as React from 'react';
import styled from 'styled-components';
import { Title, WorkTimeCard } from './components';

const StyledContentWrapper = styled.div`
  padding: 0.5rem;
`;

class App extends React.Component {
  private static readonly TITLE: string = 'Arbeitszeit Rechner';

  // TODO: this is just for basic functionality (replace with useful logic)
  dummy() {
    alert('image some really cool functionality here ;-)');
  }

  render() {
    // TODO: this is just for basic functionality (replace with useful logic)
    const time: { arrival?: Date; leave?: Date } = {
      arrival: undefined,
      leave: undefined
    };

    return (
      <div className="App">
        <Title title={App.TITLE} />
        <StyledContentWrapper>
          <WorkTimeCard
            time={time}
            onArrive={this.dummy}
            onLeave={this.dummy}
          />
        </StyledContentWrapper>
      </div>
    );
  }
}

export default App;
