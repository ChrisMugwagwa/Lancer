import React, { Component } from 'react';
import '../App.css';
import Container from '@material-ui/core/Container';
import Freelancer from './Freelancer';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import RegistrationForm from './RegistrationForm';

export default class ResultView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'edit',
            text: '',
            inputtedText: ''
        }
        this.saveText = this.saveText.bind(this);
        this.editText = this.editText.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    editText() {
        this.setState({
            mode: 'input'
        })
    }

    saveText() {
        this.setState(function () {
            return {
                mode: 'view',
                text: this.state.inputtedText
            }
        })
    }

    clearSearch() {
        this.setState({
            mode: 'edit',
            text: '',
            inputtedText: ''
        })
    }

    handleChange(e) {
        this.setState({
            inputtedText: e.target.value
        });
    }

    render() {
        if (this.state.mode === 'edit') {
            return (
                <div>
                    <br />
                    <Button onClick={this.editText}>
                        Find a Lancer
                    </Button>
                    <hr />
                    <RegistrationForm></RegistrationForm>
                </div>
            );
        } else if (this.state.mode === 'input') {
            return (
                <div>
                    <br />
                    <TextField placeholder="Search Here" onChange={this.handleChange} />,
                    <Button onClick={(e) => this.saveText(e)}>
                        SEARCH
                </Button>
                    <hr />
                </div>
            );
        } else if (this.state.mode === 'view') {
            return (
                <div>
                    <br />
                    <Button onClick={this.clearSearch}>
                        BACK
                </Button>
                    <h5>Here are all results for: {this.state.text}
                    </h5>
                    <hr />
                    {this.state.text !== '' ?  
                        <Container>
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
                        </Container> :
                        <h5>Please go back and enter something into the search box</h5>
                    }
                </div>
            )
        }

        else { return null; }
    }
}