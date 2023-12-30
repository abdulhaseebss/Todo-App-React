import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const [promptValue, setPromptValue] = useState('');
    

  function addTodo(e) {
    e.preventDefault()
    console.log(text);
    todo.push(text)
    setTodo([...todo]);
    console.log(todo);
    setText("")
  }
  function deleteTodo(index) {

    todo.splice(index, 1);
    setTodo([...todo]);
    console.log(todo);
  }
  function editTodo(index) {
    const userValue = prompt('Enter something:' , todo[index]);

    if (userValue === null) {
      console.log('user click cancle');
      return;
    }else{
      setPromptValue(userValue);
      todo[index] = userValue;
      
      console.log("Edit Button Called");
      console.log(todo);
    }
    
  }

  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={addTodo}>
        <input type="text" placeholder="enter text" onChange={(e) => setText(e.target.value)} value={text} />&nbsp;&nbsp;
        <button type="submit">Add</button>
      </form>
      <ul>
        {todo.map((item, index) => {
          return <li key={index}>{item}
          &nbsp;&nbsp;<button class="btn" onClick={()=>deleteTodo(index)}>Delete</button>&nbsp;
          <button class="btn" onClick={()=>editTodo(index)}>Edit</button></li>
        })}
      </ul>
    </>
  )
}

export default App
