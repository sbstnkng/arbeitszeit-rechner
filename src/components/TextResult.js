import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

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
        <TextField
          id="textResultField"
          floatingLabelText={this.props.label}
          disabled={true}
          value={formatValue(this.props.value)}
        />
      </div>
    );
  }
}

export default TextResult;
