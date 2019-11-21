import React, {Component} from 'react';
import Session from './Session';

class SessionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      load: true,
    };
  }

  render() {
    return <Session />;
  }
}

export default SessionContainer;