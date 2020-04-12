import React from 'react';
//import { render } from 'react-dom';
import Container from '@material-ui/core/Container';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';



var row = {
    width: "80%",
     margin: "auto"
    };

export default function RegistrationForm(props) {
    return (
        <Container> 
            <Form >
                <h1>Registration Form</h1>

                <Form.Row style={row}>
                    <Form.Group className="col-md-5 offset-md-1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your e-mail address." />
                    </Form.Group>

                    <Form.Group className="col-md-5">
                        <Form.Label>Name</Form.Label>
                        <Form.Control placeholder="Enter your name." />
                    </Form.Group>
                </Form.Row>
                <Form.Row style={row}>
                    <Form.Group className="col-md-5 offset-md-1">
                        <Form.Label>Occupation</Form.Label>
                        <Form.Control placeholder="e.g. Artist, UX Designer, Songwriter..." />
                    </Form.Group>

                    <Form.Group className="col-md-5">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" placeholder="How old are you?" />
                    </Form.Group>
                </Form.Row>

                <Form.Row style={row}>
                <Form.Group className="col-md-10 offset-md-1">
                    <Form.File id="formcheck-api-custom" label="Upload Profile Picture" custom>
                    </Form.File>
                </Form.Group>
                </Form.Row>
                
        
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}