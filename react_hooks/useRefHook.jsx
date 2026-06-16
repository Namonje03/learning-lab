import { useRef } from "react";

function RefDemo() {

  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
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