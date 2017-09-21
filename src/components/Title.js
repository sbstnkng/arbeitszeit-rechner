import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';

class Title extends Component {
  render(props) {
    const deleteButton = (
      <IconButton onClick={this.props.onHandleClear}>
        <ActionDelete />
      </IconButton>
    );

    return (
      <div>
        <AppBar
          title={this.props.title}
          showMenuIconButton={false}
          iconElementRight={deleteButton}
        />
      </div>
    );
  }
}

export default Title;
