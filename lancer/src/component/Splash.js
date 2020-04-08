import React, { Component } from 'react';
import '../App.css';
//import Carousel from 'react-bootstrap/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Clock from './Clock.js'


export default class Splash extends Component {

    constructor(props) {
        super(props)
        this.name = props.name;
      
    }

   

    welcome = () => {
        if (this.name) {
            return <h5>Hello {this.name}. We hope you enjoy your stay</h5>;
        }
        else {
            return <h5>We hope you have a nice day</h5>
        }


    };

    

    render() {
        return (
            <Jumbotron className="mainSplash">
                <div className="titleHeader">
                    <h1>Lancer</h1>
                    <Clock></Clock>
                    {this.welcome()}
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </div>
            </Jumbotron>
        );
    }
}
