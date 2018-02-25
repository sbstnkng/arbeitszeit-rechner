import * as React from 'react';
import { ContentCard } from '../content-card';
import { TimePicker } from './subcomponents';
import styled from 'styled-components';
import { ActionSchedule } from 'material-ui/svg-icons';
import {
  grey700 as grey,
  grey50 as lightGrey
} from 'material-ui/styles/colors';

const StyledWrapper = styled.div`
  overflow: hidden;
`;

const iconStyles = {
  width: 20,
  height: 20,
  marginRight: 10
};

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
    const titleIcon = <ActionSchedule style={iconStyles} color={grey} />;
    return (
      <ContentCard
        title={WorkTimeCard.TITLE}
        titleColor={grey}
        titleIcon={titleIcon}
        backgroundColor={lightGrey}
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
