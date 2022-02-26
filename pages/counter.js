import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);



    return(
        <div>

            <p>Count is {count}</p>

            <button onClick={() => {setCount(count += 1)}}>adder</button>
            <button onClick={() => {setCount(count -= 1)}}>minusr</button>
            <button onClick={() => {setCount(0)}}>reset</button>
        </div>
    )
}


export default Counter