import { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0); //count is what you see on the screen and setcount is how you change it.starting from zero

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>

  );
}

export default Counter;