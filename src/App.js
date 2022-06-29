import { func } from "prop-types";
import { useState, useEffect } from "react";



function App(){
  const [toDo, setToDo] = useState("")
  const [toDos, setToDos] = useState([])
  const onChange = (event) =>setToDo(event.target.value)
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    setToDo("");
  }
  return(
      <div>
        <form onSubmit={onSubmit}>
          <input onChange={onChange} type="text" placeholder="write your to do"></input>
          <button>Add To Do</button>
        </form>
      </div>
      )
    }


export default App;