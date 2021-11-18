import React from "react";


const Todo = ({ todo, handleToggle }) => {
  
    const handleClick = (e) => {
        e.preventDefault();
        handleToggle(e.target.id);
       
    }

    return (
    <>
      {/* <div className="row mb-4" className={todo.complete ? " strike" : ""} onClick={handleClick}  >
        <div className="col-md-8" >
        <h4 >{todo.task}</h4>
        </div>
        

        
      </div> */}
      <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} className={todo.complete ? "todo strike" : "todo"}>
            {todo.task}
        </div>

    </>
  );
};

export default Todo;
