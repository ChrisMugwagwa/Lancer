import React, { Component} from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
import Person from './Person/Person'



class App extends Component {
  render() {
    return (
      <div className="game">
        <h1> Hello</h1>
        <Person name = "Grandeur" age = "29"/>
        </div>
        
        
    );
  }
}

export default App;