import React from 'react'
import { useSelector, useDispatch } from 'react-redux' 
import { increment, decrement } from "./redux/ducks/counter"

export default function Counter() {

    // The traditional way using react
    // const [ count, setCount ] = useState(0);
    // const increment = () => setCount(count + 1);
    // const decrement = () => setCount(count - 1);

    // Using Redux
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()

    const handleIncrement = () => dispatch(increment())
    const handleDecrement = () => dispatch(decrement())

    return (
        <div style={{ backgroundColor: 'lightblue' }}>
            <h2>{count}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}
