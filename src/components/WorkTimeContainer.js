import React, { Component } from 'react';
import ContentCard from './ContentCard';
import TimePickerField from './TimePickerField';

class WorkTimeContainer extends Component {
  render() {
    return (
      <div>
        <ContentCard title="Arbeitszeit">
          <TimePickerField label="Kommen" />
          <TimePickerField label="Gehen" />
        </ContentCard>
      </div>
    );
  }
}

export default WorkTimeContainer;
