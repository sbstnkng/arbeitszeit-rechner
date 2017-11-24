import * as React from 'react';
import { TextField } from 'material-ui';
import styled from 'styled-components';
import { grey700 as grey } from 'material-ui/styles/colors';

const StyledTextField = styled(TextField)`
  float: left;
  margin-right: 25px;
  box-sizing: border-box;
`;

interface Props {
  label: string;
  value?: string;
}

export class TextResultField extends React.Component<Props, {}> {
  private static readonly TEXT_FIELD_STYLE = { width: '150px' };
  private static readonly INPUT_STYLE = { color: grey };
  private static readonly UNDERLINE_STYLE = { borderColor: grey };

  render() {
    return (
      <StyledTextField
        floatingLabelText={this.props.label}
        value={this.props.value}
        disabled={true}
        style={TextResultField.TEXT_FIELD_STYLE}
        inputStyle={TextResultField.INPUT_STYLE}
        underlineDisabledStyle={TextResultField.UNDERLINE_STYLE}
      />
    );
  }
}
