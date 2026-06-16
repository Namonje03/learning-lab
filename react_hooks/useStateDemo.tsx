import { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0); //useState is a hook that allows you to add state to a functional component.
  //  It returns an array with two elements: the current state value and a function to update it. 
  // In this case, we are initializing the count state to 0.

  return (
    <div>
      <h1>Count: {count}</h1>//this is where the count will be displayed

      <button onClick={() => setCount(count + 1)}>//when you click the button it will add 1 to the count state
        // and re-render the component with the new count value.
        Click me
      </button>
    </div>

  );
}

export default Counter;