import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class Title extends Component {
    render() {
        return (
            <div>
                <AppBar 
                    title={this.props.title}
                    showMenuIconButton={false}
                />
            </div>
        );
    }
}

export default Title;