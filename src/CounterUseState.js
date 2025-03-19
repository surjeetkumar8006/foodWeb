import { useState, useEffect } from "react";

const CounterUseState = () => {
    const [count, setCount] = useState(0);
    const [bgColor, setBgColor] = useState("white");

    useEffect(() => {
        let timer;
        if (count < 0) {
            setBgColor("red");
        
            timer = setTimeout(() => {
                console.log("Value is negative");
                setCount(0);
            }, 2000);
        } else if (count > 5) {
            setBgColor("green");
            timer = setTimeout(() => {
                console.log("Value is Greater Than 5");
            }, 2000);
        } else {
            setBgColor("white");
        }

        return () => clearTimeout(timer);
    }, [count]);
    const fetchData = async () => {
        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/posts");
            let data = await response.json();  
            console.log("Response:", data);
            
        } catch (err) {
            console.log("Error:", err);
        }
    };
    fetchData();
    return (
        <div style={{ backgroundColor: bgColor, padding: "20px", textAlign: "center" }}>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
};

export default CounterUseState;
