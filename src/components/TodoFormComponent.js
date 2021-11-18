import React, { useState } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";

const TodoForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");

  function handleSubmit(event) {
    // addTask(currentTask => [...currentTask, newTask]);
    event.preventDefault();

    console.log(newTask);
    addTask(newTask);
    setNewTask("");
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div className="row justify-content-center">
          <FormGroup className="col-md-8 ">
            <Input
              id="todo"
              name="todo"
              placeholder="Enter..."
              type="text"
              onChange={(e) => setNewTask(e.target.value)}
              value={newTask}
            />
          </FormGroup>
          <div className="col-md-2">
            <Button type="submit" color="success">
              +
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
};

export default TodoForm;
