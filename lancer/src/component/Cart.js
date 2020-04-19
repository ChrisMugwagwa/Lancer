import React, { useState, useEffect, useMemo } from 'react';

export default function Cart() {

    const initialItems = ['apples', 'flour', 'soap', 'batteries', 'magazine'];

    //This function takes an item. uses setCart state to retrun a new list with all the items that arent item (i !== item). so the returned list 
    const [stockState, setStock] = useState(initialItems);
    const dispense = item => { 
        setStock(items => items.filter(i => i !== item))
     };

    return (
        <div>
            <h4>Stock Manager</h4>
                <div>
                    <h5>Availiable Items:</h5>
                    {stockState.length === 0 ? (
                        <button onClick={() => setStock(initialItems)}>Refill</button>
                    ) : (
                            <ul>
                                {stockState.map(item => (
                                    <li key={item}>
                                        <button onClick={()=>dispense(item)}>Buy</button> {item}
                                    </li>
                                ))}
                            </ul>
                        )}
            </div>
        </div>
    )

}