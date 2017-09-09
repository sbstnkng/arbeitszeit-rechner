import React, { Component } from 'react';
import styled from 'styled-components';
import { Card, CardHeader, CardText } from 'material-ui/Card';

const StyledCard = styled(Card)`
    padding-bottom: 1rem;
    margin-top: 0.5rem;
`;

class ResultContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 42
    };
  }

  componentDidMount() {
    console.log('props', this.props);
  }

  render() {
    return (
      <div>
        <StyledCard>
          <CardHeader title="Ergebnis" />
          <CardText>
            Result: {this.state.result}
          </CardText>
        </StyledCard>
      </div>
    );
  }
}

export default ResultContainer;
