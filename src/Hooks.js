import { useState, useEffect } from "react";

function Hooks() {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("white");
  const [textColor, setTextColor] = useState("black");

  function handleCount(change) {
    setCount(count + change);
  }

  useEffect(() => { 
    if (count < 0) {
      setBgColor("yellow");
      setTextColor("red");
      alert("Negative Value");
      const timer = setTimeout(() => setCount(0), 2000);
      return () => clearTimeout(timer);
    } else if (count > 5) {
      setBgColor("black");
      setTextColor("white");
      alert("Positive Value");
    }
  }, [count]);

  return (
    <div style={{ backgroundColor: bgColor, color: textColor, padding: "20px", textAlign: "center" }}>
      <p>Count : {count}</p>
      <button onClick={() => handleCount(1)}>Increment</button>
      <button onClick={() => handleCount(-1)}>Decrement</button>
    </div>
  );
}

export default Hooks;


