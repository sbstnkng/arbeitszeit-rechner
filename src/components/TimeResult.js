import React, { Component } from 'react';
import styled from 'styled-components';
import { formatTime } from '../services/dateUtils';
import TextField from 'material-ui/TextField';
import { grey700 as grey } from 'material-ui/styles/colors';

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
          inputStyle={{ color: grey }}
        />
      </div>
    );
  }
}

export default TimeResult;
