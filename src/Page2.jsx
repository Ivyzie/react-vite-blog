import { useState, useEffect } from "react";

function Page2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 9999999);
    }, 0.000000000001);

    return () => clearTimeout(timer);
  });

  return (
    <div className="counter-div">
      <h1>Random counter lol</h1>
      <h1>(proof i know hooks)</h1>
      <h1>{count}</h1>
    </div>
  );
}

export default Page2;
