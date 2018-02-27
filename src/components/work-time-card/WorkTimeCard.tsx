import * as React from 'react';
import { ContentCard } from '../content-card';
import { TimePicker } from './subcomponents';
import styled from 'styled-components';
import { ActionSchedule } from 'material-ui/svg-icons';
import { Color } from '../../constants';
import { WorkTime } from '../../types';

const StyledWrapper = styled.div`
  overflow: hidden;
`;

const iconStyles = {
  width: 20,
  height: 20,
  marginRight: 10
};

interface Props extends WorkTime {
  onArrive: () => void;
  onLeave: () => void;
}

export class WorkTimeCard extends React.Component<Props, {}> {
  private static readonly TITLE = 'Arbeitszeit';

  render() {
    const titleIcon = (
      <ActionSchedule style={iconStyles} color={Color.TEXT_INPUT} />
    );
    return (
      <ContentCard
        title={WorkTimeCard.TITLE}
        titleColor={Color.TEXT_INPUT}
        titleIcon={titleIcon}
        backgroundColor={Color.BACKGROUND_INPUT}
      >
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
