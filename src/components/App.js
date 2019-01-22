import React, { Component } from 'react';
import DieRoller from './die_roller/_die_roller';
import Campaigns from './campaigns/_campaigns'
import ActiveEncounter from './encounters/_active_encounter';

// TODO: figure out what to do with styles
class App extends Component {
  render() {
    return (
      <div className="App" style={{ backgroundColor: '#26282a', height: '100vh' }}>
        <header className="App-header">
          <h3 className="banner-text" style={{ backgroundColor: '#C53131', textAlign: 'center' }} >Enhance Beyond</h3>
        </header>
        <DieRoller />
        <ActiveEncounter />
      </div>
    );
  }
}

export default App;
