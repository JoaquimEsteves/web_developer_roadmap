import React, { Component } from 'react';
import './App.scss';
// import { pageProps } from '../components/types';

import asyncComponent from '../components/asyncComponent';

interface AppState {
  route: string
}

class App extends Component<{}, AppState> {
  constructor(_: {}) {
    super(_);
    this.state = {
      route: 'page1',
    }
  }

  onRouteChange = (incoming_route: string) => {
    this.setState({ route: incoming_route });
  }

  render() {
    const AsyncPage2 = asyncComponent(this.state.route);
    return <AsyncPage2 onRouteChange={this.onRouteChange}/>
  }
}

export default App;
