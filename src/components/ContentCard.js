import React, { Component } from 'react';
import styled from 'styled-components';
import { Card, CardHeader, CardText } from 'material-ui/Card';

const StyledCard = styled(Card)`
  margin-top: 0.5rem;
`;

class ContentCard extends Component {
  render() {
    return (
      <div>
        <StyledCard>
          <CardHeader title={this.props.title} />
          <CardText>
            {this.props.children}
          </CardText>
        </StyledCard>
      </div>
    );
  }
}

export default ContentCard;
