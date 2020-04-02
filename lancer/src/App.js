import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header';
import Splash from './component/Splash';
import Footer from './component/Footer';

function App() {
  return (
    
    <div className="App">
      <div id="header">
      <Header></Header>
      </div>
      <div id="content">
      <Splash></Splash>
      </div>
      <div id="footer">
      <Footer></Footer>
      </div>
      
      
      
    </div>
  );
}

export default App;
