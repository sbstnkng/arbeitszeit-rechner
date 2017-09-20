import React, { Component } from 'react';
import { formatTime } from '../services/dateUtils';
import TextField from 'material-ui/TextField';

class TimeResult extends Component {
  render() {
    const value = formatTime(this.props.value);
    return (
      <div>
        <TextField
          id="timeResultField"
          floatingLabelText={this.props.label}
          //  format="24hr"
          disabled={true}
          value={value}
        />
      </div>
    );
  }
}

export default TimeResult;
