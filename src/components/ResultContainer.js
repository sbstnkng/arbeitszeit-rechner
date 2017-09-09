import React, { Component } from 'react';
import ContentCard from './ContentCard';

class ResultContainer extends Component {
  render() {
    return (
      <div>
        <ContentCard title="Ergebnis">
          7,6h erreicht um 16:30 Uhr <br />
          10h erreicht um 19:00 Uhr <br />
          Aktuelle Arbeitszeit: 8,5h (1,1h Überstunden)
        </ContentCard>
      </div>
    );
  }
}

export default ResultContainer;
