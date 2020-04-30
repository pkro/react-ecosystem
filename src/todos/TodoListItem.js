import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ todo, onRemoveTodoPressed }) => {
  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>
      <div className="buttons-container">
        <button className="btn btn-success">
          {todo.isCompleted ? (
            <i className="fa fa-check-circle"></i>
          ) : (
            <i className="fa fa-circle"></i>
          )}
        </button>
        <button
          className="btn btn-danger"
          onClick={() => onRemoveTodoPressed(todo.text)}
        >
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
