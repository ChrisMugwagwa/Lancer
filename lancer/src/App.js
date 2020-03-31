import React, {Component} from 'react';
import './App.css';

import Header from './component/header';
import Splash from './component/splash';
import Navbar from './component/navbar';

/*
import x from './component/info-component';
import x from './component/nav-header';
import x from './component/nav-img';
import x from './component/section';
import x from './component/splash';
*/
class App extends Component {
    render(){
        return (
            <div>
                <Header></Header>
                <Splash></Splash>
                <Navbar></Navbar>
            </div>
        )
            
    }
}

export default App;

