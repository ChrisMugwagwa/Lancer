import React, { Component } from 'react';
export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { d: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            d: new Date()
        })
    }

    render() {
        return (
            [<h4 key="0">Date : {this.state.d.getDate()}/{this.state.d.getMonth()}/{this.state.d.getFullYear()}</h4>,
            <h5 key="1">Time : {this.state.d.toLocaleTimeString()}</h5>]
        );
    }

}

