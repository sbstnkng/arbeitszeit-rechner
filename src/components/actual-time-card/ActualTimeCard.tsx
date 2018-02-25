import * as React from 'react';
import {
  AvAvTimer as NeutralIcon,
  SocialSentimentSatisfied as PositivIcon,
  SocialSentimentDissatisfied as NegativIcon
} from 'material-ui/svg-icons';
import {
  grey700 as grey,
  green700 as green,
  green50 as lightGreen,
  red700 as red,
  red50 as lightRed,
  blue50 as lightBlue
} from 'material-ui/styles/colors';
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
    const { color, background } = this.getStatusColor(isPositive);
    const icon = this.getStatusMood(isPositive);
    return (
      <ContentCard
        title={ActualTimeCard.TITLE}
        titleColor={color}
        titleIcon={icon}
        backgroundColor={background}
      >
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

  getStatusColor(isPositive?: boolean): { color: string; background: string } {
    let color: string;
    let background: string;
    switch (isPositive) {
      case true:
        color = green;
        background = lightGreen;
        break;
      case false:
        color = red;
        background = lightRed;
        break;
      default:
        color = grey;
        background = lightBlue;
        break;
    }

    return { color: color, background: background };
  }

  getStatusMood(isPositive?: boolean): {} {
    const iconStyles = {
      width: 20,
      height: 20,
      marginRight: 10
    };
    const color: string = this.getStatusColor(isPositive).color;
    let StatusMood = <div />;
    switch (isPositive) {
      case true:
        StatusMood = <PositivIcon style={iconStyles} color={color} />;
        break;
      case false:
        StatusMood = <NegativIcon style={iconStyles} color={color} />;
        break;
      default:
        StatusMood = <NeutralIcon style={iconStyles} color={color} />;
        break;
    }

    return StatusMood;
  }
}
