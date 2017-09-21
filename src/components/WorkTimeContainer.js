import React, { Component } from 'react';
import ContentCard from './ContentCard';
import TimePickerField from './TimePickerField';

class WorkTimeContainer extends Component {
  constructor(props) {
    super(props);

    this.handleOnChangeKommen = this.handleOnChangeKommen.bind(this);
    this.handleOnChangeGehen = this.handleOnChangeGehen.bind(this);
  }

  handleOnChangeKommen(event, date) {
    this.props.update(date, null);
  }

  handleOnChangeGehen(event, date) {
    this.props.update(null, date);
  }

  render(props) {
    return (
      <div>
        <ContentCard title="Arbeitszeit">
          <TimePickerField
            label="Kommen"
            value={this.props.time.start}
            handleOnChange={this.handleOnChangeKommen}
          />
          <TimePickerField
            label="Gehen"
            value={this.props.time.end}
            handleOnChange={this.handleOnChangeGehen}
          />
        </ContentCard>
      </div>
    );
  }
}

export default WorkTimeContainer;
