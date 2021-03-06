import React, { Component } from 'react';
import '../App.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';


export default class Freelancer extends Component {

    constructor(props) {
        super(props);
        //TO-DO:
        // This is messy. Instead, use JSON.parse to turn into a JS object.
        // Then make this.Users point to the users array rather than the root object of the JSON file 

        //hide error message when information not found. display something more user friendly
        
        //also if the search fails. just dont render the element()though there are cases wher you might want to
        this.Users = require('../assets/Users/Users.json')
    }

    displayInfo(){
        if (this.props.children) {
            try {
                return <div>
                    <Card>
                    <img alt="profilePic"
                        src={require('../assets/Users/' + this.Users.users[this.props.children].image)}
                        style={{ width: "100%", height: "100%" }}
                         />
                        <CardHeader
                            title={this.Users.users[this.props.children].email}
                            avatar={
                                <Avatar>{this.Users.users[this.props.children].name.toUpperCase()[0]}</Avatar>
                            }
                        />
                        <CardContent>
                            <Typography>{this.Users.users[this.props.children].name}</Typography>
                            <Typography>{this.Users.users[this.props.children].age}</Typography>
                            <Typography>{this.Users.users[this.props.children].occupation}</Typography>
                        </CardContent>
                        <CardMedia
                            image={require('../assets/Users/' + this.Users.users[this.props.children].image)}
                            title="profilePic"
                        //this is where the className will go
                        />
                        
                    </Card>
                    
                </div>;
            } catch (error) {
                return "Error retrieving Content" + error;
            }

        }
        else {
            return "Info Not Found"
        }
    }

    render() {
        return (
            this.displayInfo()
        )
    }
}

//<img src= alt="test" />