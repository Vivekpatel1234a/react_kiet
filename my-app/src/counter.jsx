import { useState } from "react";//curly braces so we are using hooks
import { useEffect } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    
    setCount(count=>count+1);
  }

  function handledecrement() {
    if(count==0) return;
      
    setCount(count=>count-1);
  }

   useEffect(() => { console.log("Welcome")}, []);

  useEffect(() => {
    console.log("count updated");
  }, [count]);

/*

  function greet(){
    console.log("welcome");
  }
  greet();

  function execute(fn){
    fn()
  }
  execute(greet());

  
*/
  return (
    <>
      <h1>Counter App</h1>
      <h3>Count = {count}</h3>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handledecrement}>-</button>
    </>
  );
}
