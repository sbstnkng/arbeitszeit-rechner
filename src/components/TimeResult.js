import React, { Component } from 'react';
import TimePicker from 'material-ui/TimePicker';

class TimeResult extends Component {
  render() {
    return (
      <div>
        <TimePicker
          id="timeResultField"
          floatingLabelText={this.props.label}
          format="24hr"
          disabled={true}
          value={this.props.value}
        />
      </div>
    );
  }
}

export default TimeResult;
