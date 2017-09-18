import React, { Component } from 'react';
import ContentCard from './ContentCard';
import TimePickerField from './TimePickerField';

class WorkTimeContainer extends Component {
  constructor(props) {
    super(props);

    this.handleOnChangeKommen = this.handleOnChangeKommen.bind(this);
  }

  handleOnChangeKommen(event, date) {
    const time = { start: date };
    this.props.update(time);
  }

  render(props) {
    return (
      <div>
        <ContentCard title="Arbeitszeit">
          <TimePickerField
            label="Kommen"
            handleOnChange={this.handleOnChangeKommen}
          />
          <TimePickerField label="Gehen" disabled={true} />
        </ContentCard>
      </div>
    );
  }
}

export default WorkTimeContainer;
