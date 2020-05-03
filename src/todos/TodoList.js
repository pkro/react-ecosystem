import React, { useEffect, useState } from 'react';
import TodoListItem from './TodoListItem';
import TodoForm from './TodoForm';
import { connect } from 'react-redux';
import { completeTodo } from './actions';
import {
  loadTodos,
  removeTodoRequest,
  toggleTodoCompletedRequest,
} from './thunks';
import {
  getTodosLoading,
  getCompleteTodos,
  getIncompleteTodos,
} from './selectors';

import './TodoList.css';

const TodoList = ({
  completeTodos,
  incompleteTodos,
  onRemoveTodoPressed,
  onCompleteTodoPressed,
  isLoading,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);
  const loadingMessage = (
    <div className="animate-flicker">Loading todos...</div>
  );

  const content = (
    <div>
      <TodoForm />
      <h3>Incomplete</h3>
      <div className="list-wrapper">
        {incompleteTodos.map((todo) => (
          <TodoListItem
            todo={todo}
            key={todo.text}
            onRemoveTodoPressed={onRemoveTodoPressed}
            onCompleteTodoPressed={onCompleteTodoPressed}
          />
        ))}
      </div>
      <hr />
      <h3>Completed</h3>
      <div className="list-wrapper">
        {completeTodos.map((todo) => (
          <TodoListItem
            todo={todo}
            key={todo.text}
            onRemoveTodoPressed={onRemoveTodoPressed}
            onCompleteTodoPressed={onCompleteTodoPressed}
          />
        ))}
      </div>
    </div>
  );

  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  completeTodos: getCompleteTodos(state),
  incompleteTodos: getIncompleteTodos(state),
  isLoading: getTodosLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  onRemoveTodoPressed: (id) => dispatch(removeTodoRequest(id)),
  onCompleteTodoPressed: (todo) => dispatch(completeTodo(todo)),
  startLoadingTodos: () => dispatch(loadTodos()),
  onCompleteTodoPressed: (id) => dispatch(toggleTodoCompletedRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
