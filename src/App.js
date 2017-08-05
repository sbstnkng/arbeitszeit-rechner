import React, { Component } from 'react';
import styled from 'styled-components';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Title from './components/Title';
import TimePickerField from './components/TimePickerField';

const StyledCard = styled(Card)`
  padding-bottom: 1rem;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      app: {
        name: 'Arbeitszeit Rechner'
      },
      arrive: undefined,
      leave: undefined,
      timeStandard: undefined,
      timeMaximumm: undefined,
      isButtonEnabled: false,
    };

    this.handleOnChangeKommen = this.handleOnChangeKommen.bind(this);
    this.handleOnChangeGehen = this.handleOnChangeGehen.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  handleOnChangeKommen(event, date) {
    this.setState({
      arrive: date, 
      isButtonEnabled: this.state.leave !== undefined
    });
  };

  handleOnChangeGehen(even, date) {
    this.setState({
      leave: date, 
      isButtonEnabled: this.state.arrive !== undefined
    });
  };

  calculate() {
    let timeStandard = 1;
    let timeMaximumm = 2;
    this.setState({
      timeStandard: timeStandard,
      timeMaximumm: timeMaximumm
    });
  }

  render() {
    return (
      <div className="App">
        <Title title={this.state.app.name} />
        <StyledCard>
          <CardHeader title='Grundarbeitszeit' />
          <CardText>
              <TimePickerField
                  label='Kommen'
                  handleOnChange={this.handleOnChangeKommen}
                  onBlur={this.validate}
              />
              <TimePickerField
                  label='Gehen'
                  handleOnChange={this.handleOnChangeGehen}
              />
          </CardText>
          <RaisedButton
            label='Berechnen'
            primary={true}
            disabled={!this.state.isButtonEnabled}
            onTouchTap={this.calculate}
          />
        </StyledCard>
        <StyledCard>
          <CardHeader title='Ergebnis' />
          <span>Zeit Standard: {this.state.timeStandard}</span><br />
          <span>Zeit Maximum: {this.state.timeMaximumm}</span>
        </StyledCard>
      </div>
    );
  }
}

export default App;
