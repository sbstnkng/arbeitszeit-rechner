import * as React from 'react';
import { AppBar, IconButton } from 'material-ui';
import { ActionDelete } from 'material-ui/svg-icons';

interface Props {
  title: string;
  onHandleDelete: () => void;
}

export class Title extends React.Component<Props, {}> {
  render() {
    const DeleteButton = (
      <IconButton onClick={this.props.onHandleDelete}>
        <ActionDelete />
      </IconButton>
    );
    return (
      <div>
        <AppBar
          title={this.props.title}
          showMenuIconButton={false}
          iconElementRight={DeleteButton}
        />
      </div>
    );
  }
}
