import React from 'react';
import './App.css';

import Rescursive from './components/recursive'
import Metadata from './components/recursive/models/Metadata'

function App() {

  let m = new Metadata()
  let m2 = new Metadata()
  let m3 = new Metadata()
  m.t = "Roster"
  m2.t = "Knob"
  m3.t = "TextBox"
  m.md = [
    m2,
    m3
  ]
  return (
    <div className="App">
      { Rescursive.render(m) }
      <button onClick={(mEvent)=>{
        console.log(Rescursive.cleanObject(m))
      }}>sdf</button>
    </div>
  );
}

export default App;
