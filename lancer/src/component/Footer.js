import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
// import { Nav } from 'react-bootstrap';

export default class Footer extends Component {
    render(){
        return(
            <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' id="footer">
                <Navbar.Brand>{this.props.children}</Navbar.Brand>
                <Navbar.Collapse id='responsive-navbar-nav'>
                   
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
