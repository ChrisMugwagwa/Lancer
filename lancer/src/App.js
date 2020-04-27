import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header';
import Splash from './component/Splash';
import Footer from './component/Footer';
import ResultView from './component/ResultView';
import AuthContext from './context/auth-context';

function App() {
  const [user, setUser] = useState({
    loggedIn: false
  })

  return (


    <div className="App">
      {/* Everything inside this AuthContext scope tags will be able to have acces to the AuthContext context without having to pass it down multiple props/components. In a real example you would select the scope more carefully*/}
      <AuthContext.Provider value={
        {
          authenticated: user.loggedIn,
          login: () => {
            setUser({ loggedIn: true })
          },
          logout: () => {
            setUser({ loggedIn: false })
          }
        }
      }>
        <div id="header">
          <Header></Header>
        </div>
        <div id="content">
          <Splash name="Chris"></Splash>
          <ResultView></ResultView>
          <br />
        </div>
        
        <div id="footer">
          <Footer>Quis autem vel eum iure reprehenderit</Footer>
        </div>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
