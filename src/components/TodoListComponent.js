import React from 'react';
import Todo from './TodoComponent';

const TodoList = ({ toDoList , handleToggle , handleFilter}) => {
    return(
        <>
        <div className="row">
        {toDoList.map((task) => {
            return(
                <Todo todo ={task} key={task.id} handleToggle={handleToggle}/>
            )
        })}
        </div>
        <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
        </>
    );
}

export default TodoList;