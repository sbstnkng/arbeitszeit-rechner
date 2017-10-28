import React, { Component } from 'react';
import TimePicker from 'material-ui/TimePicker';
import styled from 'styled-components';

const StyledTimePicker = styled(TimePicker)`
  float: left;
  margin-right: 25px;
  box-sizing: border-box;
`;

class TimePickerField extends Component {
  render(props) {
    return (
      <div>
        <StyledTimePicker
          floatingLabelText={this.props.label}
          format="24hr"
          value={this.props.value}
          onChange={this.props.handleOnChange}
          autoOk={true}
          disabled={this.props.disabled}
          textFieldStyle={{ width: '150px' }}
        />
      </div>
    );
  }
}

export default TimePickerField;
