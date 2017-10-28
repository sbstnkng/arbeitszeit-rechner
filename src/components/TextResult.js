import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import styled from 'styled-components';

const StyledTextField = styled(TextField)`
  float: left;
  margin-right: 25px;
  box-sizing: border-box;
`;

class TextResult extends Component {
  render() {
    function formatValue(value) {
      if (value === null) {
        return '';
      }

      const formattedValue = value.toFixed(2);
      return formattedValue + ' h';
    }

    return (
      <div>
        <StyledTextField
          id="textResultField"
          floatingLabelText={this.props.label}
          disabled={true}
          value={formatValue(this.props.value)}
          style={{ width: '150px' }}
        />
      </div>
    );
  }
}

export default TextResult;
