import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";

function App() {
  const [todos, setTodos] = useState([]);

  //for storing the value of editTodo we required  one more state
  const [edit, setEdit] = useState({
    todo: {},
    isEdit: false,
  });

  //filter will return new array which items id not match we can keep it and other remove
  //removetodo
  const removeTodo = (id) => {
    // console.log(id)
    console.log(id);
    setTodos(todos.filter((item) => item.id !== id));
  };

  //addTodo
  const addTodo = (text) => {
    //we required id and object
    const newTodo = {
      id: crypto.randomUUID(),
      text: text,
    };
    //  console.log(newTodo)
    setTodos([newTodo, ...todos]);
  };

  //editTodo
  //we required all todo for edit
  // todo will fill by upcoming values
  const editTodo = (todo) => {
    setEdit({
      todo: todo,
      isEdit: true,
    });
  };

  //update todo
  const updateTodo = (oldId, newText) => {
    setTodos(
      todos.map((item) => {
        if (item.id === oldId) {
          return { id: oldId, text: newText };
        } else {
          return item;
        }
      })
    );
    setEdit({todo : {}, isEdit : false})
  };

  return (
    <>
      <Navbar />
      <div className="container p-5">
        <Form addTodo={addTodo} edit={edit} updateTodo={updateTodo} />
        <ListGroup todos={todos} removeTodo={removeTodo} editTodo={editTodo} />
      </div>
    </>
  );
}

export default App;
