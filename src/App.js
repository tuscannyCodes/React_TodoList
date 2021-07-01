import React, { useState } from "react";
import './App.css';
//importing components 
import Form from "./components/form";
import TodoList from "./components/todoList";

function App() {

  const [ inputText, setInputText] = useState ("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
 <header>
<h1 className="appTitle">Todo List</h1>
<p className="paragraph">React edition</p>
</header> 

<Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText= {setInputText}/>
<TodoList setTodos={setTodos} todos={todos} /> 
    </div>
  );
}

export default App;
