import React from 'react';
import Faves from './Faves';

class FavesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      load: true,
    };
  }

  render() {
    return <Faves />;
  }
}

export default FavesContainer;
