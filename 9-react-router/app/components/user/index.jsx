import React, { Component } from 'react';

import Toolbar from '../toolbar';

export default class Application extends Component {
    render(){
        return (<div>
            User: {this.props.params.id}
        </div>);
    }
}
