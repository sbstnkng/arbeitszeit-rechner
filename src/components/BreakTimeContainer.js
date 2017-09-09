import React, { Component } from 'react';
import ContentCard from './ContentCard';

class BreakTimeContainer extends Component {
  render() {
    return (
      <div>
        <ContentCard title="Pausenzeiten">
          <i>Keine Pausenzeiten vorhanden</i>
        </ContentCard>
      </div>
    );
  }
}

export default BreakTimeContainer;
