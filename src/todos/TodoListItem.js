import React from 'react';

import TodoItemContainer from '../ui_styled_components/TodoItemContainer';
import ButtonsContainer from '../ui_styled_components/ButtonsContainer';

const TodoListItem = ({
  todo: { id, text, isCompleted, createdAt },
  onRemoveTodoPressed,
  onCompleteTodoPressed,
}) => {
  return (
    <TodoItemContainer createdAt={createdAt} isCompleted={isCompleted}>
      <div>
        <h3>{text}</h3>
        <p>Created: {new Date(createdAt).toLocaleDateString()}</p>
      </div>

      <ButtonsContainer direction="row">
        <button
          className="btn btn-success"
          onClick={() => onCompleteTodoPressed(id)}
        >
          {isCompleted ? (
            <i className="fa fa-check-circle"></i>
          ) : (
            <i className="fa fa-circle"></i>
          )}
        </button>
        <button
          className="btn btn-danger"
          onClick={() => onRemoveTodoPressed(id)}
        >
          <i className="fa fa-trash"></i>
        </button>
      </ButtonsContainer>
    </TodoItemContainer>
  );
};

export default TodoListItem;
