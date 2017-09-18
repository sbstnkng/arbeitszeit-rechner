import React, { Component } from 'react';
import ContentCard from './ContentCard';
import TimeResult from './TimeResult';
import {
  calculateMinWorkTime,
  calculateMaxWorkTime
} from '../services/calculationService';

class ResultContainer extends Component {
  render(props) {
    const startTime = this.props.time.arrival;

    return (
      <div>
        <ContentCard title="Ergebnis">
          <TimeResult label={'7,6h'} value={calculateMinWorkTime(startTime)} />
          <TimeResult label={'10h'} value={calculateMaxWorkTime(startTime)} />
        </ContentCard>
      </div>
    );
  }
}

export default ResultContainer;
