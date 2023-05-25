function TodoItem({name, completed, newTodoItem}) {
 
  
  const deleteTodoItem = () => {
    alert(`hi`);
    newTodoItem(item);
  } 

    return (
      <>
        <div className="alert m-3">
            {completed ? "✔️" : ""} {name}
            
            <button onSubmit={deleteTodoItem}className="btn btn-outline-info ms-3" type="submit">Delete</button>
        </div>
      </>
    )
  }
  
  export default TodoItem;