import React, { Component } from 'react';
import { formatTime } from '../services/dateUtils';
import TextField from 'material-ui/TextField';
import styled from 'styled-components';

const StyledTextField = styled(TextField)`
  float: left;
  margin-right: 25px;
  box-sizing: border-box;
`;

class TimeResult extends Component {
  render() {
    const value = formatTime(this.props.value);
    return (
      <div>
        <StyledTextField
          id="timeResultField"
          floatingLabelText={this.props.label}
          disabled={true}
          value={value}
          style={{ width: '150px' }}
        />
      </div>
    );
  }
}

export default TimeResult;
