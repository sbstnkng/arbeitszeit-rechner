import React, { Component } from 'react';
import ContentCard from './ContentCard';
import moment from 'moment';

class ResultContainer extends Component {
  render(props) {
    function formatDate(date) {
      if (date !== undefined) {
        return moment(date).format('hh:mm');
      }
    }

    return (
      <div>
        <ContentCard title="Ergebnis">
          7,6h erreicht um 16:30 Uhr <br />
          10h erreicht um 19:00 Uhr <br />
          Aktuelle Arbeitszeit: 8,5h (1,1h Überstunden)
          <br />
          <br />
          arrival: {formatDate(this.props.time.arrival)}
        </ContentCard>
      </div>
    );
  }
}

export default ResultContainer;
