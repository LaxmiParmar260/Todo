import React, { useEffect, useState } from "react";

const Form = ({ addTodo, edit, updateTodo }) => {
  // we are handle the input by creating the state
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // inside text it wiil add the value of state
    // addTodo(text);
    if (edit.isEdit) {
      updateTodo(edit.todo.id, text);
    } else {
      addTodo(text);
    }
    //after submit setText will be empty
    setText("");
  };

  //editTodo
  //  console.log(edit)
  //setText is value of input
  useEffect(() => {
    setText(edit.todo.text);
  }, [edit]);

  return (
    <form className="my-3" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Enter text here..."
        className="form-control"
        //input values send to the state // when form will submit state value send to app
        onChange={(e) => setText(e.target.value)}
        //text value  hook inside the input
        value={text}
      />
      <button className="btn btn-success rounded-0 my-3 w-100">Submit</button>
    </form>
  );
};

export default Form;
