import React, {Component} from 'react';
import '../App.css';
import Container from '@material-ui/core/Container';
import Freelancer from './Freelancer';

export default class ResultView extends Component{
    render(){
        return(
            
            <Container >
                <h1><u>Results</u></h1>
                <div className="row col-md-12">
                <div className="col-md-3">
                <Freelancer>0</Freelancer>
                </div>
                <div className="col-md-3">
                <Freelancer>1</Freelancer>
                </div>
                <div className="col-md-3">
                <Freelancer>2</Freelancer>
                </div>
                <div className="col-md-3">
                <Freelancer>3</Freelancer>
                </div>
                </div>

                
            </Container>
        )
    }
}