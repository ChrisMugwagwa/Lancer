import React, { useState, useEffect, useMemo } from 'react';
import AuthContext from '../context/auth-context';

export default function Cart() {

    const initialItems = ['apples', 'flour', 'soap', 'batteries', 'magazine'];

    //This function takes an item. uses setCart state to retrun a new list with all the items that arent item (i !== item). so the returned list 
    const [stockState, setStock] = useState(initialItems);
    const dispense = item => {
        setStock(items => items.filter(i => i !== item))
    };

    useEffect(() => {
        //Didnt know this but using the back quote character ` (usually above tab,left of 1) allows
        // you to put values in strings similar to python f-strings with the $ character (which is a template literal in ES6)
        // so a line like: document.title = "You have: " + stockState.length + " items"; becomes
        document.title = `You have ${stockState.length} items`

        //This is the optional return statement of useState which will call the function on a dismount
        return (() => {
            document.title = "Lancer";
        })
    }, [stockState.length]);

    return (
        <div>
            <h4>Stock Manager</h4>
            <AuthContext.Consumer>
                {(status) => {
                    if (status.authenticated === true) {
                        return (<div>
                            <h5>Logged In Successfully: {status.authenticated}</h5>
                            <div>
                                <h5>Availiable Items:</h5>
                                {stockState.length === 0 ? (
                                    <button onClick={() => setStock(initialItems)}>Refill</button>
                                ) : (
                                        <ul>
                                            {stockState.map(item => (
                                                <li key={item}>
                                                    <button onClick={() => dispense(item)}>Buy</button> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                            </div>
                        </div>)
                    } else if (status.authenticated === false) {
                        return <h5>Please login to view stock</h5>
                    } else {
                        return <h5>Something went wrong: {status.authenticated}</h5>
                    }
                }}
            </AuthContext.Consumer>


        </div>
    )

}