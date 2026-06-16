import { useEffect } from "react";

function EffectDemo() {

  useEffect(() => {
    console.log("The page has loaded!");// useEffect runs this code once after the component is displayed on the screen
  }, []); //

  return (
    <div>
      <h1>Welcome Esther</h1>
      <p>Open the console.</p>
    </div>
  );
}

export default EffectDemo;