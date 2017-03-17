import React, { Component } from 'react';
import './App.css';
import BossTimer from './BossTimer';
import Bosses from './data/Bosses';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BossTimer data={Bosses}/>
      </div>
    );
  }
}

export default App;
