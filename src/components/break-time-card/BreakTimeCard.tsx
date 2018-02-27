import * as React from 'react';
import { ContentCard } from '../content-card';
import styled from 'styled-components';
import {
  ImageTimelapse as CardIcon,
  ContentAdd as AddIcon
} from 'material-ui/svg-icons';
import { Color } from '../../constants';

const StyledWrapper = styled.div`
  overflow: hidden;
`;

const iconStyles = {
  width: 20,
  height: 20,
  marginRight: 10
};

interface Props {}

export class BreakTimeCard extends React.Component<Props, {}> {
  private static readonly TITLE = 'Pausenzeiten';

  render() {
    const titleIcon = <CardIcon style={iconStyles} color={Color.TEXT_INPUT} />;
    const addIcon = <AddIcon />;
    return (
      <ContentCard
        title={BreakTimeCard.TITLE}
        titleColor={Color.TEXT_INPUT}
        titleIcon={titleIcon}
        backgroundColor={Color.BACKGROUND_INPUT}
        expandIcon={addIcon}
      >
        <StyledWrapper>
          <span>
            <i>Hier werden die Pausenzeiten angezeigt.</i>
          </span>
        </StyledWrapper>
      </ContentCard>
    );
  }
}
