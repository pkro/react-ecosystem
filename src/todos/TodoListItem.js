import React from 'react';

import TodoItemContainer from '../ui_styled_components/TodoItemContainer';
import ButtonsContainer from '../ui_styled_components/ButtonsContainer';

const TodoListItem = ({ todo, onRemoveTodoPressed, onCompleteTodoPressed }) => {
  return (
    <TodoItemContainer>
      <h3>{todo.text}</h3>
      <ButtonsContainer>
        <button
          className="btn btn-success"
          onClick={() => onCompleteTodoPressed(todo.id)}
        >
          {todo.isCompleted ? (
            <i className="fa fa-check-circle"></i>
          ) : (
            <i className="fa fa-circle"></i>
          )}
        </button>
        <button
          className="btn btn-danger"
          onClick={() => onRemoveTodoPressed(todo.id)}
        >
          <i className="fa fa-trash"></i>
        </button>
      </ButtonsContainer>
    </TodoItemContainer>
  );
};

export default TodoListItem;
