import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react";

function App() {

  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("")
  const onClick = () => setValue((prev) => prev + 1)
  const onChange = (event) => setKeyword(event.target.value)
  console.log('i run all the time')
  const iRunOnlyOnce = () =>{
    console.log("once")
  }
  useEffect(iRunOnlyOnce, [])
  console.log("search for", keyword)
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."></input>
      <h1 className={styles.title}>
         {counter}
      </h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
