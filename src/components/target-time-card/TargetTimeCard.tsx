import * as React from 'react';
import { ActionUpdate } from 'material-ui/svg-icons';
import {
  grey700 as grey,
  blue50 as lightBlue
} from 'material-ui/styles/colors';
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
    const titleIcon = <ActionUpdate style={iconStyles} color={grey} />;
    return (
      <ContentCard
        title={TargetTimeCard.TITLE}
        titleColor={grey}
        titleIcon={titleIcon}
        backgroundColor={lightBlue}
      >
        <StyledWrapper>
          <TimeResultField label="7,6h" value={normal} />
          <TimeResultField label="10h" value={max} />
        </StyledWrapper>
      </ContentCard>
    );
  }
}
