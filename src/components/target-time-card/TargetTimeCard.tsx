import * as React from 'react';
import { ActionUpdate } from 'material-ui/svg-icons';
import { Color } from '../../constants';
import { ContentCard } from '../content-card';
import { TimeResultField } from './subcomponents';
import styled from 'styled-components';
import { TargetTime } from '../../types';

const StyledWrapper = styled.div`
  overflow: hidden;
`;

const iconStyles = {
  width: 20,
  height: 20,
  marginRight: 10
};

export class TargetTimeCard extends React.Component<TargetTime, {}> {
  private static readonly TITLE = 'Sollzeit';

  render() {
    const { normal, max } = this.props.targetTime;
    const titleIcon = <ActionUpdate style={iconStyles} color={Color.TEXT} />;
    return (
      <ContentCard
        title={TargetTimeCard.TITLE}
        titleColor={Color.TEXT}
        titleIcon={titleIcon}
        backgroundColor={Color.BACKGROUND}
      >
        <StyledWrapper>
          <TimeResultField label="7,6h" value={normal} />
          <TimeResultField label="10h" value={max} />
        </StyledWrapper>
      </ContentCard>
    );
  }
}
