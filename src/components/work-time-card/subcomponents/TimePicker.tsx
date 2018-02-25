import * as React from 'react';
import { TimePicker as MaterialTimePicker } from 'material-ui';
import styled from 'styled-components';

const StyledTimePicker = styled(MaterialTimePicker)`
  float: left;
  margin-right: 25px;
  box-sizing: border-box;
`;

interface Props {
  label: string;
  value?: Date;
  onChange: () => void;
}

export class TimePicker extends React.Component<Props, {}> {
  private static readonly TIME_FORMAT = '24hr';
  private static readonly TEXT_FIELD_STYLE = {
    width: '150px'
  };

  render() {
    return (
      <StyledTimePicker
        floatingLabelText={this.props.label}
        format={TimePicker.TIME_FORMAT}
        value={this.props.value}
        onChange={this.props.onChange}
        autoOk={true}
        textFieldStyle={TimePicker.TEXT_FIELD_STYLE}
      />
    );
  }
}
