import * as React from 'react';
import styled from 'styled-components';
import { Card, CardHeader, CardText } from 'material-ui/Card';

const StyledCard = styled(Card)`
  margin-top: 0.5rem;
`;

interface Props {
  title: string;
}

export class ContentCard extends React.Component<Props, {}> {
  render() {
    return (
      <StyledCard>
        <CardHeader title={this.props.title} />
        <CardText>{this.props.children}</CardText>
      </StyledCard>
    );
  }
}
