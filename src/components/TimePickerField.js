import React, { Component } from 'react';
import TimePicker from 'material-ui/TimePicker';

class TimePickerField extends Component {
  render() {
    return (
      <div>
        <TimePicker
          hintText={this.props.label}
          format="24hr"
          onChange={this.props.handleOnChange}
          autoOk={true}
          disabled={this.props.disabled}
        />
      </div>
    );
  }
}

export default TimePickerField;
