import React, { Component } from 'react';
import styled from 'styled-components';
import ContentCard from './ContentCard';
import TimeResult from './TimeResult';
import {
  calculateMinWorkTime,
  calculateMaxWorkTime
} from '../services/calculationService';

const StyledDiv = styled.div`overflow: hidden;`;

const textFieldStyle = {
  width: '120px',
  float: 'left',
  marginRight: '25px',
  paddingTop: '0'
};

class ResultContainer extends Component {
  render(props) {
    const startTime = this.props.time.start;

    return (
      <div>
        <ContentCard title="Ergebnis">
          <StyledDiv>
            <TimeResult
              label={'7,6h'}
              value={calculateMinWorkTime(startTime)}
              textFieldStyle={textFieldStyle}
            />
            <TimeResult
              label={'10h'}
              value={calculateMaxWorkTime(startTime)}
              textFieldStyle={textFieldStyle}
            />
          </StyledDiv>
        </ContentCard>
      </div>
    );
  }
}

export default ResultContainer;
