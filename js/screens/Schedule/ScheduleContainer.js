import React from 'react';
import Schedule from './Schedule';

class ScheduleContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      load: true,
    };
  }

  render() {
    return <Schedule />;
  }
}

export default ScheduleContainer;