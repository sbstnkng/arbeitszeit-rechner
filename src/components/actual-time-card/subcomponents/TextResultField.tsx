import * as React from 'react';
import { TextField } from 'material-ui';
import styled from 'styled-components';
import {
  grey700 as grey,
  red700 as red,
  green700 as green
} from 'material-ui/styles/colors';
import { TimeUtility } from '../helpers';

const StyledTextField = styled(TextField)`
  float: left;
  margin-right: 25px;
  box-sizing: border-box;
`;

interface Props {
  label: string;
  date?: Date;
  isPositive?: boolean;
  hasNegativeValue?: boolean;
}

export class TextResultField extends React.Component<Props, {}> {
  public static defaultProps: Partial<Props> = {
    hasNegativeValue: false
  };

  private static readonly TEXT_FIELD_STYLE = { width: '150px' };
  private static readonly INPUT_STYLE_DEFAULT = { color: grey };
  private static readonly INPUT_STYLE_GREEN = { color: green };
  private static readonly INPUT_STYLE_RED = { color: red };
  private static readonly UNDERLINE_STYLE_DEFAULT = { borderColor: grey };
  private static readonly UNDERLINE_STYLE_GREEN = { borderColor: green };
  private static readonly UNDERLINE_STYLE_RED = { borderColor: red };

  render() {
    const { label, date, isPositive, hasNegativeValue } = this.props;
    const formattedText: string | undefined = this.createFormattedText(
      date,
      isPositive,
      hasNegativeValue
    );
    const styles = this.getStatusStyles(isPositive);
    return (
      <StyledTextField
        floatingLabelText={label}
        value={formattedText}
        disabled={true}
        style={TextResultField.TEXT_FIELD_STYLE}
        inputStyle={styles.input}
        underlineDisabledStyle={styles.underline}
      />
    );
  }

  private createFormattedText(
    date?: Date,
    isPositive?: boolean,
    hasNegativeValue?: boolean
  ): string | undefined {
    if (!date) {
      return undefined;
    }

    let preSign: string = '';
    if (hasNegativeValue) {
      preSign = isPositive ? '' : '-';
    }

    return (
      preSign +
      TimeUtility.toIndustrialTime(date) +
      'h (' +
      TimeUtility.toTime(date) +
      ')'
    );
  }

  private getStatusStyles(isPositive?: boolean) {
    const styles = {
      input: TextResultField.INPUT_STYLE_DEFAULT,
      underline: TextResultField.UNDERLINE_STYLE_DEFAULT
    };

    if (isPositive) {
      styles.input = TextResultField.INPUT_STYLE_GREEN;
      styles.underline = TextResultField.UNDERLINE_STYLE_GREEN;
    } else if (!isPositive) {
      styles.input = TextResultField.INPUT_STYLE_RED;
      styles.underline = TextResultField.UNDERLINE_STYLE_RED;
    }

    return styles;
  }
}
