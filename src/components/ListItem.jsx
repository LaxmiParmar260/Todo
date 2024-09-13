import React from "react";

const ListItem = ({ todo, removeTodo, editTodo }) => {
  return (
    <li className="list-group-item">
      {todo.text}
      <span className="float-end">
        <button
          className="btn btn-sm btn-warning rounded-0"
          onClick={() => editTodo(todo)}
        >
          Edit
        </button>
        <button
          className="btn btn-sm btn-danger rounded-0"
          onClick={() => removeTodo(todo.id)}
        >
          Delete
        </button>
      </span>
    </li>
  );
};

export default ListItem;
