import * as React from 'react';
import styled from 'styled-components';
import { Card, CardHeader, CardText } from 'material-ui';

const StyledCard = styled(Card)`
  margin-top: 0.5rem;
`;

const titleStyle = {
  fontSize: 18
};

interface Props {
  title: string;
  titleColor?: string;
  titleIcon?: {};
  backgroundColor?: string;
  expandIcon?: {};
}

export class ContentCard extends React.Component<Props, {}> {
  render() {
    const {
      title,
      titleColor,
      titleIcon,
      backgroundColor,
      expandIcon
    } = this.props;
    const style = {
      backgroundColor: backgroundColor,
      color: titleColor
    };
    return (
      <StyledCard containerStyle={style}>
        <CardHeader
          title={title}
          titleStyle={titleStyle}
          titleColor={titleColor}
          avatar={titleIcon}
          showExpandableButton={expandIcon !== undefined}
          openIcon={expandIcon}
          closeIcon={expandIcon}
          iconStyle={style}
        />
        <CardText>{this.props.children}</CardText>
      </StyledCard>
    );
  }
}
