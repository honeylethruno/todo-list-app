import { useState } from "react";

function TodoForm({addTodoItem}) {

  const [item, setTodoItem] = useState({
    name: '',
    completed: false,
  });

  const handleTextChange = (text) => {
    setTodoItem({
      name: text.target.value,
      completed: false,
    });
  }

  const newTodoItem = () => {
    alert(`hello`);
    addTodoItem(item);
  } 
 

    return (
      <>
      <form>
        <div className="row">
            <div classname="col-md-9">
                <input className="mt-4 form-control" type="text" placeholder="Write your to-do here..." onChange={handleTextChange}/>
            </div>
            <div className="col m-3">
                <div className="text-center">
                    <button onClick={newTodoItem} className="btn btn-outline-info" type="submit">Add to-do</button>
                </div>
            </div>
            <hr></hr>
        </div>
      </form>
      </>
    )
  }
  
  export default TodoForm;