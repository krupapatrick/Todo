import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/InputFeild';
import { Todo } from './components/model';

const App: React.FC = () => {
  
  const[todo, setTodo] = useState<string>("");
  const[todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    
    if(todo){
      setTodos([...todos, {id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
   
  };

  console.log(todos);

  return (
    <div className="App"> 
      <span className="heading">Aces todo</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {todos.map(/* <TodoModel name={whatever}></TodoModel>)}
    </div>

  );
};


export default App;
