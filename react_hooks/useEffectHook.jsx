import { useEffect } from "react";

function EffectDemo() {

  useEffect(() => {
    console.log("The page has loaded!");
  }, []);

  return (
    <div>
      <h1>Welcome Esther</h1>
      <p>Open the console.</p>
    </div>
  );
}

export default EffectDemo;