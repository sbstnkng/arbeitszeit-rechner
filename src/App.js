import React, { Component } from 'react';
import styled from 'styled-components';
import Title from './components/Title';
import WorkTimeContainer from './components/WorkTimeContainer';
import BreakTimeContainer from './components/BreakTimeContainer';
import ResultContainer from './components/ResultContainer';
import { isDateValid } from './services/dateUtils';

const StyledContentWrapper = styled.div`padding: 0.5rem;`;

const cacheKey = 'appTimeData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meta: {
        name: 'Arbeitszeit Rechner'
      },
      time: {
        start: null,
        end: null
      }
    };
    this.updateTime = this.updateTime.bind(this);
    this.clear = this.clear.bind(this);
  }

  componentWillMount() {
    const cachedTime = localStorage.getItem(cacheKey);
    if (cachedTime) {
      const time = JSON.parse(cachedTime);
      const startDate = time.start ? new Date(time.start) : null;
      const endDate = time.end ? new Date(time.end) : null;
      this.updateTime(startDate, endDate);
    }
  }

  componentDidUpdate() {
    const start = this.state.time.start;
    const end = this.state.time.end;
    if (isDateValid(start) || isDateValid(end)) {
      localStorage.setItem(cacheKey, JSON.stringify(this.state.time));
    }
  }

  updateTime(start, end) {
    const startTime = start !== null ? start : this.state.time.start;
    const endTime = end !== null ? end : this.state.time.end;
    this.setState({
      time: {
        start: startTime,
        end: endTime
      }
    });
  }

  clear() {
    localStorage.removeItem(cacheKey);
    this.setState({
      time: {
        start: null,
        end: null
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Title title={this.state.meta.name} onHandleClear={this.clear} />
        <StyledContentWrapper>
          <WorkTimeContainer time={this.state.time} update={this.updateTime} />
          <BreakTimeContainer />
          <ResultContainer time={this.state.time} />
        </StyledContentWrapper>
      </div>
    );
  }
}

export default App;
