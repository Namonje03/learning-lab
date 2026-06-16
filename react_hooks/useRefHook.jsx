import { useRef } from "react";

function RefDemo() {

  const inputRef = useRef(null); // useRef is a hook that allows you to create a reference to a DOM element.

  function focusInput() {
    inputRef.current.focus(); // this function will focus the input field when the button is clicked
  }

  return (
    <div>

      <input
        ref={inputRef}
        type="text"
        placeholder="Type here"
      />

      <button onClick={focusInput}>
        Focus Input
      </button>

    </div>
  );
}

export default RefDemo;