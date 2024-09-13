import React from "react";
import ListItem from "./ListItem";

const ListGroup = ({ todos, removeTodo, editTodo }) => {
  return (
    <ul className="list-group my-2">
      {todos.map((todo) => {
        return (
          <ListItem
            todo={todo}
            key={todo.id}
            removeTodo={removeTodo}
            editTodo={editTodo}
          />
        );
      })}
    </ul>
  );
};

export default ListGroup;
