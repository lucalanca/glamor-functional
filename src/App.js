import React, { Component } from 'react';
import logo from './logo.svg';

import UiColors from './ui/UiColors';
import UISpacings from './ui/UiSpacings';

class App extends Component {
  render() {
    return (
      <div>
        <UiColors />
        <UISpacings />
      </div>
    );
  }
}

export default App;
