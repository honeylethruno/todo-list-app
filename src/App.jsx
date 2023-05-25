import { useState, useEffect} from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";


function App() {

   const [todoitems, setTodoItems] = useState([
    {
      name: 'create react app',
      completed: true,
    },

    {
      name: 'npm install',
      completed: false,
    },

   ]);

  const addTodoItem = (todoitem) => {
    alert(`hello world`);
    setTodoItems((prevTodoItems) => [
      ...prevTodoItems,
      todoitem
    ]);
  }

  const todoitemList = todoitems.map(todoitem => (
    <TodoItem name={todoitem.name} 
              completed={todoitem.completed} />
  ))
  
  return (
    <>
      <div className="container m-5 p-5 border border-info">
          <h1 className="text-center fw-bold">To-do List App</h1>
      
      
      <TodoForm addTodoItem={addTodoItem}/>

      <TodoList />
      {todoitemList}
      </div>
    </>
  )
}

export default App;
