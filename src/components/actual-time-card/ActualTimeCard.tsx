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
  };
}

export class ActualTimeCard extends React.Component<Props, {}> {
  private static readonly TITLE = 'Istzeit';

  render() {
    const { time, overtime } = this.props.actualTime;
    return (
      <ContentCard title={ActualTimeCard.TITLE}>
        <StyledWrapper>
          <TextResultField label="Arbeitszeit" date={time} />
          <TextResultField label="Überstunden" date={overtime} />
        </StyledWrapper>
      </ContentCard>
    );
  }
}
