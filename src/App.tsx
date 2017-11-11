import * as React from 'react';
import { Title } from './components';

class App extends React.Component {
  static readonly TITLE: string = 'Arbeitszeit Rechner';

  render() {
    return (
      <div className="App">
        <Title title={App.TITLE} />
      </div>
    );
  }
}

export default App;
