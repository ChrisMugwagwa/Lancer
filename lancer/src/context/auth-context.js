import React from 'react';

//Make a plain js object. A react context doesnt have to be an object. It can be an array, etc.
const authContext = React.createContext({
    authenticated: false,
    login: () =>{

    },
    logout: ()=>{
        
    }
})

//export it so that it can be accessed globally
export default authContext;