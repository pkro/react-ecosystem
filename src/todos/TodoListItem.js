import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ todo, onRemoveTodoPressed }) => {
  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>
      <div className="buttons-container">
        <button className="btn btn-success">Mark as completed</button>
        <button
          className="btn btn-danger"
          onClick={() => onRemoveTodoPressed(todo.text)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
