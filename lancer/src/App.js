import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header';
import Splash from './component/Splash';
import Footer from './component/Footer';
import ResultView from './component/ResultView';

function App() {
  return (
    
    <div className="App">
      <div id="header">
      <Header></Header>
      </div>
      <div id="content">
      <Splash name="Chris"></Splash>
      <ResultView></ResultView>
      <br/>
      </div>
      <div>
       
      </div>
      {/*

      */}
      <div id="footer">
      <Footer>Quis autem vel eum iure reprehenderit</Footer>
      </div>
      
      
      
    </div>
  );
}

export default App;
