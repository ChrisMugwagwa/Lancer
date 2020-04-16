import React from 'react';
import '../App.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';

export default function Freelancer(searches = "-1") {
    const data = require('../assets/Users/Users.json');
    const userList = data.users;
    const search = searches;

    return doSearch()
     
  

    function doSearch() {
        let elements = []
        if (search != -1 || search != "-1") {
           
            userList.forEach((x) => {
                try {
                    elements.push(displayInfo(x));
                }
                catch (error) {
                    return "Error retrieving Content" + error;
                }
            });
        }
        return elements;
    }

    function displayInfo(user) {
        console.log("INSIDE " + user.name);
        return (
            <div className="col-md-3">
                <Card>
                    <img alt="profilePic"
                        src={require('../assets/Users/' + user.image)}
                        style={{ width: "100%", height: "100%" }}
                    />
                    <CardHeader
                        title={user.email}
                        avatar={
                            <Avatar>{user.name.toUpperCase()[0]} </Avatar>
                        }
                    />
                    <CardContent>
                        <Typography>{user.name}</Typography>
                        <Typography>{user.age}</Typography>
                        <Typography>{user.occupation}</Typography>
                    </CardContent>
                    <CardMedia
                        image={require('../assets/Users/' + user.image)}
                        title="profilePic"
                    //this is where the className will go
                    />

                </Card>
            </div>
        );
    }
}
/*
    if (props) {
        try {
            return <div>
                <Card>
                    <img alt="profilePic"
                        src={require('../assets/Users/' + user.image)}
                        style={{ width: "100%", height: "100%" }}
                    />

                    <CardHeader
                        title={user.email}
                        avatar={
                            <Avatar>{user.name.toUpperCase()[0]} </Avatar>
                        }
                    />

                    <CardContent>
                        <Typography>{user.name}</Typography>
                        <Typography>{user.age}</Typography>
                        <Typography>{user.occupation}</Typography>
                    </CardContent>

                    <CardMedia
                        image={require('../assets/Users/' + user.image)}
                        title="profilePic"
                    //this is where the className will go
                    />

                </Card>
            </div>;
        } catch (error) {
            return "Error retrieving Content" + error;
        }
    }
}

/*
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
        if [props.id] {
            try {
                return <div>
                    <Card>
                    <img alt="profilePic"
                        src={require('../assets/Users/' + user.image)}
                        style={{ width: "100%", height: "100%" }}
                         />
                        <CardHeader
                            title={user.email}
                            avatar={
                                <Avatar>{user.name.toUpperCase()[0]} </Avatar>
                            }
                        />
                        <CardContent>
                            <Typography>{user.name}</Typography>
                            <Typography>{user.age}</Typography>
                            <Typography>{user.occupation}</Typography>
                        </CardContent>
                        <CardMedia
                            image={require('../assets/Users/' + user.image)}
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
*/
//<img src= alt="test" />