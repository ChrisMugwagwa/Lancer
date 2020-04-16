import React, { Component, useState } from 'react';
import '../App.css';
import Container from '@material-ui/core/Container';
import Freelancer from './Freelancers';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import RegistrationForm from './RegistrationForm';
import {
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function ResultView() {
    const [pageView, setPageView] = useState({
        view: "none",
        mode: 'edit',
        text: '',
        inputtedText: ''
    });



function editText() {
    setPageView({
        mode: 'input'
    })
}

function saveText() {
    setPageView(function () {
        return {
            mode: 'view',
            text: pageView.inputtedText
        }
    })
}

function clearSearch() {
    setPageView({
        mode: 'edit',
        text: '',
        inputtedText: ''
    })
}

function handleChange(e) {
    setPageView({
        inputtedText: e.target.value
    });
}


return (
    <Switch>
        <Route exact path="/">
            <div>
                <br />
                <Link to="/search">
                    <Button onClick={editText}>Find a Lancer</Button>
                </Link>
                <Link to="/search">
                    <Button onClick={editText}>Register</Button>
                </Link>
                <hr />
                <RegistrationForm></RegistrationForm>
            </div>
        </Route>

        <Route exact path="/search">
            <div>
                <br />
                <Link to="/">
                    <Button onClick={clearSearch}> BACK</Button>
                </Link>
                <TextField placeholder="Search Here" onChange={handleChange} />
                <Link to="/search/results">
                    <Button onClick={(e) => saveText(e)}>SEARCH</Button>
                </Link>
                <hr />
            </div>
        </Route>

        <Route exact path="/search/results">
            <div>
                <br />
                <Link to="/search">
                    <Button onClick={clearSearch}> BACK</Button>
                </Link>
                <h5>Here are all results for: {pageView.text}
                </h5>
                <hr />
                {pageView.text !== '' ?
                    <Container>
                        <div className="row col-md-12">
                            {Freelancer(pageView.text)}
                        </div>
                    </Container> :
                    <h5>Please go back and enter something into the search box</h5>
                }
            </div>
        </Route>

    </Switch>
);
    }
