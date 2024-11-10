"use client";

import React, { useState } from 'react';

const Counter = ({num = 1, style = {}}) => {
    const [count, setCount] = useState(0);

    const increment = () => setCount((prevCount) => (prevCount + num) >= 10 ? 0 : prevCount + num);
    const decrement = () => setCount((prevCount) => (prevCount - num) >= 10 ? 0 : prevCount - num);
    const zero = () => setCount(0);

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Counter: {count}</h2>
            <button onClick={decrement} style={{ marginRight: '10px', backgroundColor: 'red' }}>
                -
            </button>
            <button onClick={increment} style={{ marginRight: '10px', backgroundColor: 'gold' }}>+</button>
            <button onClick={zero}>zero</button>
        </div>
    );
};

export default Counter;
