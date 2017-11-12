import * as React from 'react';
import { ContentCard } from '../content-card';
import { TimePicker } from './subcomponents';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  overflow: hidden;
`;

interface Props {
  onArrive: () => void;
  onLeave: () => void;
  time: {
    arrival?: Date;
    leave?: Date;
  };
}

export class WorkTimeCard extends React.Component<Props, {}> {
  private static readonly TITLE = 'Arbeitszeit';

  render() {
    return (
      <ContentCard title={WorkTimeCard.TITLE}>
        <StyledWrapper>
          <TimePicker
            label="Kommen"
            value={this.props.time.arrival}
            onChange={this.props.onArrive}
          />
          <TimePicker
            label="Gehen"
            value={this.props.time.leave}
            onChange={this.props.onLeave}
          />
        </StyledWrapper>
      </ContentCard>
    );
  }
}
