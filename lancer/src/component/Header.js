import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';

export default class Header extends Component {
    render(){
        return(
            <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
                <Navbar.Brand>Lancer</Navbar.Brand>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#video">Video</Nav.Link>
                    <Nav.Link href="#photography">Photography</Nav.Link>
                    <Nav.Link href="#gdesign">Graphic Design</Nav.Link>
                    <Nav.Link href="#register">Register</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
