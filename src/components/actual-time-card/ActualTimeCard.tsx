import * as React from 'react';
import { ContentCard } from '../content-card';
import { TextResultField } from './subcomponents';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  overflow: hidden;
`;

interface Props {
  actualTime: {
    time?: Date;
    overtime?: Date;
    isPositive?: boolean;
  };
}

export class ActualTimeCard extends React.Component<Props, {}> {
  private static readonly TITLE = 'Istzeit';

  render() {
    const { time, overtime, isPositive } = this.props.actualTime;
    return (
      <ContentCard title={ActualTimeCard.TITLE}>
        <StyledWrapper>
          <TextResultField
            label="Arbeitszeit"
            date={time}
            isPositive={isPositive}
          />
          <TextResultField
            label="Überstunden"
            date={overtime}
            isPositive={isPositive}
            hasNegativeValue={true}
          />
        </StyledWrapper>
      </ContentCard>
    );
  }
}
