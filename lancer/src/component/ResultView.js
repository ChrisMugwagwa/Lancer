import React, {Component} from 'react';
import '../App.css';
import Container from '@material-ui/core/Container';
import Freelancer from './Freelancer';

export default class ResultView extends Component{
    render(){
        return(
            
            <Container>
                <h1>Hello</h1>
                <Freelancer></Freelancer>
            </Container>
        )
    }
}