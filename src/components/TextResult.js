import React, { Component } from 'react';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import { formatTime } from '../services/dateUtils';
import { convertFromIndustry } from '../services/calculationService';
import {
  grey700 as grey,
  lightGreen700 as green,
  deepOrange700 as red
} from 'material-ui/styles/colors';

const StyledTextField = styled(TextField)`
  float: left;
  margin-right: 25px;
  box-sizing: border-box;
`;

class TextResult extends Component {
  render() {
    function getColor(value, minValue) {
      if (
        value === null ||
        value === undefined ||
        (minValue === null || minValue === undefined)
      ) {
        return grey;
      }
      return value >= minValue ? green : red;
    }

    function formatValue(value) {
      if (value === null) {
        return '';
      }

      const formattedValue = value.toFixed(2);
      const formattedTime = formatTime(convertFromIndustry(formattedValue));
      return formattedValue + ' h (' + formattedTime + ')';
    }

    const value = formatValue(this.props.value);
    const color = getColor(this.props.value, this.props.minValue);
    const textStyle = { color: color };
    const borderStyle = { borderColor: color };
    return (
      <div>
        <StyledTextField
          id="textResultField"
          floatingLabelText={this.props.label}
          disabled={true}
          value={value}
          style={{ width: '150px' }}
          inputStyle={textStyle}
          underlineDisabledStyle={borderStyle}
        />
      </div>
    );
  }
}

export default TextResult;
