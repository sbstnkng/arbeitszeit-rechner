import * as React from 'react';
import { TimePicker as MaterialTimePicker } from 'material-ui';
import { Color } from '../../../constants';
import styled from 'styled-components';
import { LabelDateValue } from '../../../types';

const StyledTimePicker = styled(MaterialTimePicker)`
  float: left;
  margin-right: 25px;
  box-sizing: border-box;
`;

export class TimeResultField extends React.Component<LabelDateValue, {}> {
  private static readonly TIME_FORMAT = '24hr';
  private static readonly TEXT_FIELD_STYLE = { width: '150px' };
  private static readonly INPUT_STYLE = { color: Color.TEXT };

  render() {
    return (
      <StyledTimePicker
        floatingLabelText={this.props.label}
        format={TimeResultField.TIME_FORMAT}
        value={this.props.value}
        disabled={true}
        textFieldStyle={TimeResultField.TEXT_FIELD_STYLE}
        inputStyle={TimeResultField.INPUT_STYLE}
      />
    );
  }
}
