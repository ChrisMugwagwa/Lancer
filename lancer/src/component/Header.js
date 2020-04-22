import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import AuthContext from '../context/auth-context'
import Button from 'react-bootstrap/Button';

export default class Header extends Component {



    render() {
        return (

            <Navbar collapseOnSelect expand='sm' bg='dark' variant='dark' id="header">
                <Navbar.Brand>Lancer</Navbar.Brand>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/video">Video</Nav.Link>
                    <Nav.Link href="/photography">Photography</Nav.Link>
                    <Nav.Link href="/gdesign">Graphic Design</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                </Navbar.Collapse>
                <AuthContext.Consumer>{(status) => {
                        if (status.authenticated === false) {
                            return <Button onClick={status.login}>Login</Button>
                        } else {
                            return <Button onClick={status.logout}>Logout</Button>
                        }
                    }
                }</AuthContext.Consumer>

            </Navbar>

        );
    }
}
