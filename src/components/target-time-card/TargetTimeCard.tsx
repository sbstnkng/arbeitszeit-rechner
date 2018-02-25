import * as React from 'react';
import { ContentCard } from '../content-card';
import { TimeResultField } from './subcomponents';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  overflow: hidden;
`;

interface Props {
  targetTime: {
    normal?: Date;
    max?: Date;
  };
}

export class TargetTimeCard extends React.Component<Props, {}> {
  private static readonly TITLE = 'Sollzeit';

  render() {
    const { normal, max } = this.props.targetTime;
    return (
      <ContentCard title={TargetTimeCard.TITLE}>
        <StyledWrapper>
          <TimeResultField label="7,6h" value={normal} />
          <TimeResultField label="10h" value={max} />
        </StyledWrapper>
      </ContentCard>
    );
  }
}
