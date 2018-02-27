import * as React from 'react';
import { TextField } from 'material-ui';
import styled from 'styled-components';
import { Color } from '../../../constants';
import { TimeUtility } from '../helpers';
import { LabelDateValue } from '../../../types';

const StyledTextField = styled(TextField)`
  float: left;
  margin-right: 25px;
  box-sizing: border-box;
`;

interface Props extends LabelDateValue {
  isPositive?: boolean;
  hasNegativeValue?: boolean;
}

interface StatusStyles {
  input: {};
  underline: {};
}

export class TextResultField extends React.Component<Props, {}> {
  public static defaultProps: Partial<Props> = {
    hasNegativeValue: false
  };

  private static readonly TEXT_FIELD_STYLE = { width: '150px' };
  private static readonly INPUT_STYLE_DEFAULT = { color: Color.TEXT };
  private static readonly INPUT_STYLE_GREEN = { color: Color.TEXT_POSITIV };
  private static readonly INPUT_STYLE_RED = { color: Color.TEXT_NEGATIV };
  private static readonly UNDERLINE_STYLE_DEFAULT = { borderColor: Color.TEXT };
  private static readonly UNDERLINE_STYLE_GREEN = {
    borderColor: Color.TEXT_POSITIV
  };
  private static readonly UNDERLINE_STYLE_RED = {
    borderColor: Color.TEXT_NEGATIV
  };

  render() {
    const { label, value, isPositive, hasNegativeValue } = this.props;
    const formattedText: string | undefined = this.createFormattedText(
      value,
      isPositive,
      hasNegativeValue
    );
    const styles: StatusStyles = this.getStatusStyles(isPositive);
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
      return '';
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

  private getStatusStyles(isPositive?: boolean): StatusStyles {
    const styles = {
      input: TextResultField.INPUT_STYLE_DEFAULT,
      underline: TextResultField.UNDERLINE_STYLE_DEFAULT
    };
    switch (isPositive) {
      case true:
        styles.input = TextResultField.INPUT_STYLE_GREEN;
        styles.underline = TextResultField.UNDERLINE_STYLE_GREEN;
        break;
      case false:
        styles.input = TextResultField.INPUT_STYLE_RED;
        styles.underline = TextResultField.UNDERLINE_STYLE_RED;
        break;
      default:
    }

    return styles;
  }
}
