import * as React from 'react';
import { ContentCard } from '../content-card';
import { TextResultField } from './subcomponents';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  overflow: hidden;
`;

interface Props {
  actualTime?: Date;
}

export class ActualTimeCard extends React.Component<Props, {}> {
  private static readonly TITLE = 'Istzeit';

  render() {
    const worktime = 'worktime';
    const overtime = 'overtime';
    return (
      <ContentCard title={ActualTimeCard.TITLE}>
        <StyledWrapper>
          <TextResultField label="Arbeitszeit" value={worktime} />
          <TextResultField label="Überstunden" value={overtime} />
        </StyledWrapper>
      </ContentCard>
    );
  }
}
