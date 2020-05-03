import React, { useEffect, useState } from 'react';
import Flicker from '../ui_styled_components/Flicker';
import ListWrapper from '../ui_styled_components/ListWrapper';
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
  const loadingMessage = <Flicker>Loading todos...</Flicker>;

  const content = (
    <div>
      <TodoForm />
      <h3>Incomplete</h3>
      <ListWrapper>
        {incompleteTodos.map((todo) => (
          <TodoListItem
            todo={todo}
            key={todo.text}
            onRemoveTodoPressed={onRemoveTodoPressed}
            onCompleteTodoPressed={onCompleteTodoPressed}
          />
        ))}
      </ListWrapper>
      <hr />
      <h3>Completed</h3>
      <ListWrapper>
        {completeTodos.map((todo) => (
          <TodoListItem
            todo={todo}
            key={todo.text}
            onRemoveTodoPressed={onRemoveTodoPressed}
            onCompleteTodoPressed={onCompleteTodoPressed}
          />
        ))}
      </ListWrapper>
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
