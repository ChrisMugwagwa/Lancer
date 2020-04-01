import React, { Component } from 'react';
import '../App.css';
//import Carousel from 'react-bootstrap/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';



export default class Splash extends Component {
    render() {
        return (
            <Jumbotron className="mainSplash">
                <div className="titleHeader">
                <h1>Lancer</h1>
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
                      