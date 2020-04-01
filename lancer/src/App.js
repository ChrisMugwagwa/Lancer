import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header';
import Splash from './component/Splash';

function App() {
  return (
    
    <div className="App">
      <Header className="header"></Header>
      <Splash className="splash"></Splash>
     {/*
      <Footer className="footer"></Footer>
     -->*/}
    </div>
  );
}

export default App;
