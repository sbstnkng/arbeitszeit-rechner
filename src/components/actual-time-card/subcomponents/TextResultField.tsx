import * as React from 'react';
import { TextField } from 'material-ui';
import styled from 'styled-components';
import { grey700 as grey } from 'material-ui/styles/colors';
import { TimeUtility } from '../helpers';

const StyledTextField = styled(TextField)`
  float: left;
  margin-right: 25px;
  box-sizing: border-box;
`;

interface Props {
  label: string;
  date?: Date;
}

export class TextResultField extends React.Component<Props, {}> {
  private static readonly TEXT_FIELD_STYLE = { width: '150px' };
  private static readonly INPUT_STYLE = { color: grey };
  private static readonly UNDERLINE_STYLE = { borderColor: grey };

  render() {
    const { date } = this.props;
    const formattedText: string | undefined = this.createFormattedText(date);
    return (
      <StyledTextField
        floatingLabelText={this.props.label}
        value={formattedText}
        disabled={true}
        style={TextResultField.TEXT_FIELD_STYLE}
        inputStyle={TextResultField.INPUT_STYLE}
        underlineDisabledStyle={TextResultField.UNDERLINE_STYLE}
      />
    );
  }

  private createFormattedText(date?: Date): string | undefined {
    if (!date) {
      return undefined;
    }
    return (
      TimeUtility.toIndustrialTime(date) +
      'h (' +
      TimeUtility.toTime(date) +
      ')'
    );
  }
}
