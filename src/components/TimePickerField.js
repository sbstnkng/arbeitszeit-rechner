import React, { Component } from 'react';
import TimePicker from 'material-ui/TimePicker';

class TimePickerField extends Component {
  render(props) {
    return (
      <div>
        <TimePicker
          floatingLabelText={this.props.label}
          format="24hr"
          value={this.props.value}
          onChange={this.props.handleOnChange}
          autoOk={true}
          disabled={this.props.disabled}
        />
      </div>
    );
  }
}

export default TimePickerField;
