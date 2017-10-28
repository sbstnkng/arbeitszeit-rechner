import React, { Component } from 'react';
import ContentCard from './ContentCard';
import TimeResult from './TimeResult';
import TextResult from './TextResult';
import {
  calculateMinWorkTime,
  calculateMaxWorkTime,
  calculateRealWorkTime
} from '../services/calculationService';
import styled from 'styled-components';

const StyledWrapper = styled.div`overflow: hidden;`;

class ResultContainer extends Component {
  render(props) {
    const startTime = this.props.time.start;
    const endTime = this.props.time.end;
    const workTimeResult = calculateRealWorkTime(startTime, endTime);
    const worktime = workTimeResult !== null ? workTimeResult.hours : null;
    const overtime = workTimeResult !== null ? workTimeResult.overtime : null;

    return (
      <div>
        <ContentCard title="SOLL-Zeit">
          <StyledWrapper>
            <TimeResult
              label={'7,6h'}
              value={calculateMinWorkTime(startTime)}
            />
            <TimeResult label={'10h'} value={calculateMaxWorkTime(startTime)} />
          </StyledWrapper>
        </ContentCard>
        <ContentCard title="IST-Zeit">
          <StyledWrapper>
            <TextResult label={'Arbeitszeit'} value={worktime} />
            <TextResult label={'Überstunden'} value={overtime} />
          </StyledWrapper>
        </ContentCard>
      </div>
    );
  }
}

export default ResultContainer;
