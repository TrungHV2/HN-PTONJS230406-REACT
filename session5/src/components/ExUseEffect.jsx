import React, { useEffect, useState, useContext } from 'react'
import {MyContext} from '../index'

export default function ExUseEffect() {
    const [isMount, setIsMount] = useState(false);
    const [count, setCount] = useState(0);

    const {color} = useContext(MyContext);

    useEffect(() => {
        if (isMount) {
            // Component Mount
            console.log('componentDidMount');

            return () => {
                console.log('componentWillUnmount');
            }
        } else {
            console.log('componentInit');
            setIsMount(true);
        }
    }, [isMount])

    useEffect(() => {
        if (isMount) {
            console.log('componentDidUpdate' + count);
        }
    }, [count])

    return (
        <div>
            <h1>Component useEffect</h1>
            <h2 style={{color: color}}>Counter: {count}</h2>
            <button onClick={e => setCount(count + 1)}>Counter</button>
        </div>
    )
}
