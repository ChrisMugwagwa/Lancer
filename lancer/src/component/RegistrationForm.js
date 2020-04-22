import React,{useState} from 'react';
//import { render } from 'react-dom';
import Container from '@material-ui/core/Container';
import Form from 'react-bootstrap/Form'
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(
    {
        root:{
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: 48,
            padding: '0 30px',
        }     
    }
);

var row = {
    width: "80%",
     margin: "auto"
    };


export default function RegistrationForm() {
    const classes = useStyles();
    const [textBox, setTextBox] = useState({
        value: "Please Enter Some Text"
    })

    const [selectBox, setSelectBox] = useState({
        value: "apple"
    })

    function handleChange(e){
        setTextBox({value: e.target.value})
    }

    function handleSelect(e){
        setSelectBox({value: e.target.value})
    }
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
                <Form.Label>Profile Picture</Form.Label>
                    <Form.File id="formcheck-api-custom" label="Upload Image" custom>
                    </Form.File>
                </Form.Group>
                </Form.Row>
                
                <textarea value={textBox.value} onChange={handleChange}/>
                <h5>Inputted Text:</h5>
                <p>{textBox.value}</p>
                <br/>
                <select value={selectBox.value} onChange={handleSelect}             >
                <option value="apple">Apple</option>
                <option value ="pear">Pear</option>
                <option value = "banana">Banana</option>
                <option value="orange">Orange</option>
                </select>    
                <h5>Selected Element:</h5>
                <p>{selectBox.value}</p>
                <Button variant="primary" type="submit" className={classes.root}>
                    Submit
                </Button>
            </Form>
        </Container>
    );
}