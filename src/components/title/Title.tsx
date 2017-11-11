import * as React from 'react';
import AppBar from 'material-ui/AppBar';

interface Props {
  title: string;
}

export class Title extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <AppBar title={this.props.title} showMenuIconButton={false} />
      </div>
    );
  }
}
