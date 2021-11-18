import React, { useState } from "react";
import TodoForm from "./components/TodoFormComponent";
import TodoList from "./components/TodoListComponent";
import Header from "./components/Header";
import data from "./data.json";
import "./App.css";

const App = () => {
  const [toDoList, setToDoList] = useState(data);

  const addTask = (input) => {
    let copy = [...toDoList];
    copy.push({ id: toDoList.length + 1, task: input, complete: false });
    setToDoList(copy);
  };

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  return (
    <>
      <Header />
      <div className="container mt-5">
        <TodoForm addTask={addTask} />
      </div>
      <div className="container mt-2 ">
        <TodoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} />
      </div>
    </>
  );
};

export default App;
